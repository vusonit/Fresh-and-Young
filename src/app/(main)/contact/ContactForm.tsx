"use client";

import { useState } from "react";
import Button from "@/components/shared/Button";
import { sendContactEmail } from "@/app/actions/send-contact";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    const result = await sendContactEmail(data);

    if (result.success) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Đã xảy ra lỗi.");
    }
  }

  const inputClass =
    "w-full bg-transparent text-base font-normal leading-[1.35] text-bg-light placeholder:text-[#898989] border-b border-white/25 pb-3 outline-none focus:border-primary transition-colors";

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col" style={{ gap: 58 }}>
        {/* Tên */}
        <input
          type="text"
          name="name"
          required
          placeholder="Tên của bạn*"
          className={inputClass}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          required
          placeholder="Email của bạn*"
          className={inputClass}
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          required
          placeholder="Số điện thoại của bạn*"
          className={inputClass}
        />

        {/* Message */}
        <textarea
          name="message"
          rows={4}
          placeholder="Lời nhắn"
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit button */}
      <div style={{ marginTop: 22 }}>
        <Button
          variant="primary"
          type="submit"
          hoverText="Gửi ngay!"
        >
          {status === "sending" ? "Đang gửi..." : "Gửi lời nhắn"}
        </Button>
      </div>

      {/* Status messages */}
      {status === "sent" && (
        <p className="text-primary text-sm mt-4">
          Gửi thành công! Chúng tôi sẽ liên hệ lại sớm nhất.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm mt-4">{errorMsg}</p>
      )}
    </form>
  );
}

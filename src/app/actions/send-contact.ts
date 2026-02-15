"use server";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, phone, message } = data;

  if (!name || !email || !phone) {
    return { success: false, error: "Vui lòng điền đầy đủ thông tin bắt buộc." };
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return { success: false, error: "Chưa cấu hình access key." };
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `[FY] Liên hệ mới từ ${name}`,
        from_name: "FY Contact Form",
        name,
        email,
        phone,
        message: message || "(Không có lời nhắn)",
      }),
    });

    const result = await res.json();

    if (result.success) {
      return { success: true };
    }
    return { success: false, error: "Gửi thất bại. Vui lòng thử lại sau." };
  } catch {
    return { success: false, error: "Gửi thất bại. Vui lòng thử lại sau." };
  }
}

const values = [
  {
    number: "(01.)",
    title: "Hình ảnh chất lượng cao tiếp cận nhiều góc nhìn độc đáo",
    description:
      "Giúp dự án được thể hiện sinh động, giàu chiều sâu và tăng sức thuyết phục trong trình bày và truyền thông.",
  },
  {
    number: "(02.)",
    title: "Giải pháp trực quan toàn diện",
    description:
      "Kết hợp 3D, video, tour 360 và sa bàn ảo để truyền tải dự án nhất quán trên nhiều nền tảng và mục đích sử dụng.",
  },
  {
    number: "(03.)",
    title: "Đội ngũ trẻ nhiệt huyết – linh hoạt – chuyên nghiệp",
    description:
      "Đảm bảo khả năng phối hợp hiệu quả, phản hồi nhanh và thích ứng tốt với yêu cầu thực tế của từng dự án.",
  },
  {
    number: "(04.)",
    title: "Tư duy sáng tạo liên tục đổi mới",
    description:
      "Luôn cập nhật xu hướng và công nghệ mới để mang đến những cách thể hiện khác biệt, hiện đại và có giá trị lâu dài.",
  },
];

export default function ServiceValuesSection() {
  return (
    <section className="relative w-full bg-dark overflow-hidden">
      <div className="relative w-[1440px] mx-auto" style={{ height: 818 }}>
        {/* Title */}
        <h2
          className="absolute text-[32px] font-medium leading-[1.35] text-bg-light text-center uppercase"
          style={{ left: 244, top: 102, width: 954 }}
        >
          Giá trị bạn nhận được khi hợp tác cùng chúng tôi
        </h2>

        {/* Description */}
        <p
          className="absolute text-[16px] font-normal leading-[1.35] text-bg-light text-center"
          style={{ left: 244, top: 195, width: 952 }}
        >
          Tại FY, chúng tôi tin rằng một đối tác chuyên nghiệp không chỉ mang
          đến sản phẩm đẹp, mà còn mang lại sự an tâm trong từng giai đoạn triển
          khai.
        </p>

        {/* Value items */}
        {values.map((item, index) => {
          const topY = [340, 448, 542, 650][index];
          return (
            <div
              key={index}
              className="absolute"
              style={{ left: 0, top: topY, width: 1440 }}
            >
              {/* Number */}
              <span
                className="absolute text-[24px] font-normal leading-[1.22] text-white uppercase"
                style={{ left: 122, width: 54 }}
              >
                {item.number}
              </span>

              {/* Title */}
              <h3
                className="absolute text-[24px] font-normal leading-[1.22] text-white uppercase"
                style={{ left: 244, width: 464 }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="absolute text-[16px] font-normal leading-[1.35] text-white"
                style={{ left: 855, width: 463 }}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

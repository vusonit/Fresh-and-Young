import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fresh & Young | Studio Visualization Kiến Trúc",
  description:
    "Fresh & Young là studio visualization kiến trúc, kết hợp tư duy thiết kế và công nghệ hình ảnh tiên tiến để xây dựng những trải nghiệm không gian trực quan, chính xác và giàu giá trị cho các dự án.",
  keywords: [
    "visualization",
    "kiến trúc",
    "diễn hoạ",
    "3D rendering",
    "Fresh & Young",
    "FY",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={montserrat.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

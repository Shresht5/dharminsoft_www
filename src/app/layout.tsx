import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DharminSoft",
  description: "Software Company",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` min-h-screen antialiased`}
    >
      <body className="min-h-screen text-[12px] sm:text-[16px]">{children}</body>
    </html>
  );
}

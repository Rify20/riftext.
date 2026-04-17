import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RifText — Image to Text OCR by RifDev",
  description:
    "Modern blue-white OCR web app to extract text from images instantly. Built by RifDev.",
  applicationName: "RifText",
  keywords: ["OCR", "image to text", "RifText", "RifDev", "Next.js", "Tesseract.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
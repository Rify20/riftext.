import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://riftext.vercel.app"),
  title: "RifText by RifDev",
  description:
    "RifText adalah web untuk mengambil teks dari gambar secara cepat, rapi, dan langsung bisa disalin.",
  applicationName: "RifText",
  keywords: [
    "",
    "gambar ke teks",
    "image to text",
    "extract text from image",
    "RifText",
    "RifDev"
  ],
  authors: [{ name: "RifDev", url: "https://www.instagram.com/rifdev_/" }],
  creator: "RifDev",
  publisher: "RifDev",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RifText — Ubah Gambar Menjadi Teks",
    description:
      "Ambil teks dari gambar dengan cepat, rapi, dan langsung bisa disalin.",
    url: "https://riftext.vercel.app",
    siteName: "RifText",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

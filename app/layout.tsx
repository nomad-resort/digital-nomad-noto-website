import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nomad-resort-noto-2026.roccan.chatgpt.site"),
  title: "Nomad Resort Noto 2026｜FAM Tour & Free Accommodation",
  description:
    "お熊甲祭と能登の暮らしに触れるFAM Tour、地域と未来をつくるFree Accommodation Program。日本語・英語でご案内します。",
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  openGraph: {
    title: "Nomad Resort Noto 2026",
    description: "FAM Tour & Free Accommodation — live, work, and create with Noto.",
    type: "website",
    locale: "ja_JP",
    alternateLocale: ["en_US"],
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "Nomad Resort Noto 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomad Resort Noto 2026",
    description: "FAM Tour & Free Accommodation — live, work, and create with Noto.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

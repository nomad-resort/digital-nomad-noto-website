import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nomad-resort-noto-2026.roccan.chatgpt.site"),
  title: "Nomad Resort Noto 2026｜お熊甲祭 FAM Tour",
  description:
    "お熊甲祭の熱と、能登島の暮らしの中へ。2026年9月16日〜22日の5名限定FAM Tourと、10名のFree Accommodation。",
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  openGraph: {
    title: "Nomad Resort Noto 2026｜お熊甲祭 FAM Tour",
    description:
      "お熊甲祭の熱と、能登島の暮らしの中へ。5名限定FAM Tourと10名のFree Accommodation。",
    type: "website",
    locale: "ja_JP",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Nomad Resort Noto 2026 — お熊甲祭の熱と、能登の暮らしの中へ。",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomad Resort Noto 2026｜お熊甲祭 FAM Tour",
    description:
      "お熊甲祭の熱と、能登島の暮らしの中へ。5名限定FAM Tourと10名のFree Accommodation。",
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

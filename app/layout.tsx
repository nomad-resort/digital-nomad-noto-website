import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nomad-resort-noto-2026.sites.openai.com"),
  title: "Nomad Resort Noto 2026｜FAM Tour & Free Accommodation",
  description:
    "能登を、観るのではなく、生きる。2026年のFAM TourとFree Accommodation Programの募集案内。",
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  openGraph: {
    title: "Nomad Resort Noto 2026",
    description: "FAM Tour & Free Accommodation — 能登を、観るのではなく、生きる。",
    type: "website",
    locale: "ja_JP",
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "Nomad Resort Noto 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomad Resort Noto 2026",
    description: "FAM Tour & Free Accommodation — 能登を、観るのではなく、生きる。",
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

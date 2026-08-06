import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://noto.nomadresort.jp"),
  title: "Nomad Resort Noto 2026 | Okuma Kabuto FAM Tour",
  description:
    "Enter the Okuma Kabuto Festival and live the rhythm of Notojima. A five-person FAM Tour and a ten-person Free Accommodation Program in 2026.",
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  openGraph: {
    title: "Nomad Resort Noto 2026 | Okuma Kabuto FAM Tour",
    description:
      "Enter the festival. Live the rhythm of Noto. A five-person FAM Tour and a ten-person Free Accommodation Program.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ja_JP"],
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Nomad Resort Noto 2026 — Enter the festival. Live the rhythm of Noto.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomad Resort Noto 2026 | Okuma Kabuto FAM Tour",
    description:
      "Enter the festival. Live the rhythm of Noto. A five-person FAM Tour and a ten-person Free Accommodation Program.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-lang="en">
      <body>{children}</body>
    </html>
  );
}

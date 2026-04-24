import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vantumcap.com"),
  title: "Vantum Capital",
  description:
    "Vantum Capital is an investment firm focused on complex, special situations and dislocated opportunities.",
  openGraph: {
    title: "Vantum Capital",
    description:
      "Vantum Capital is an investment firm focused on complex, special situations and dislocated opportunities.",
    url: "https://www.vantumcap.com",
    siteName: "Vantum Capital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 614,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vantum Capital",
    description:
      "Vantum Capital is an investment firm focused on complex, special situations and dislocated opportunities.",
    images: ["/og-image.jpg"],
  },
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

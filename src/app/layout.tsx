import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bmps.pro"),
  title: "BMPS | Bangladesh Music Performers Society",
  description:
    "Bangladesh Music Performers Society licenses the public use of music and pays royalties to the singers, musicians and DJs who perform it.",
  openGraph: {
    title: "BMPS | Bangladesh Music Performers Society",
    description: "Every time music plays in public, its performers get paid.",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = { themeColor: "#0b0e1a" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} antialiased`}>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}

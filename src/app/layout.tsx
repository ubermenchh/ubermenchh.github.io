import type { Metadata } from "next";
import { JetBrains_Mono, EB_Garamond } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import Navigation from "@/components/Navigation";

const ebGaramond = EB_Garamond({
    variable: "--font-eb-garamond",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
    title: {
        default: "Compiler Durden",
        template: "%s | Compiler Durden",
    },
    description: "Serial obsessive at the intersection of low-level systems and machine intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} ${jetbrainsMono.variable} antialiased bg-bg min-h-screen`}
        suppressHydrationWarning
      >
        <div className="relative z-10">
            <Navigation />
            <main>
                {children}
            </main>
        </div>
      </body>
    </html>
  );
}

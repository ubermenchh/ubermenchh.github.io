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
  title: "Compiler Durden",
  description: "My nerd house",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} ${jetbrainsMono.variable} antialiased bg-tn-bg-dark min-h-screen relative`}
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

import type { Metadata } from "next";
import { JetBrains_Mono, EB_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "katex/dist/katex.min.css";
import Navigation from "@/components/Navigation";
import ThemeProvider from "@/components/ThemeProvider";

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
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning className={`${ebGaramond.variable} ${jetbrainsMono.variable} antialiased bg-bg min-h-screen`}>
                <ThemeProvider>
                    <Navigation />
                    <main>{children}</main>
                </ThemeProvider>
                <Script
                    data-goatcounter="https://ubermenchh.goatcounter.com/count"
                    src="//gc.zgo.at/count.js"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    );
}

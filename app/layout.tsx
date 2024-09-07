import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Theme } from '@radix-ui/themes';
import localFont from "next/font/local";
import '@radix-ui/themes/styles.css';
import "./styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Swedball",
  description: "Swedish data mining project"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class">
          <Theme>
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}

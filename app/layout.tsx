import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export const metadata: Metadata = {
  title: "Swedball",
  description: "Swedish data mining project"
};

export const viewport: Viewport = {
  width: "device-width",
  userScalable: false
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ThemeProvider attribute="class">
          <Theme>
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}

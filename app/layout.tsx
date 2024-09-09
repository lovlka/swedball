import type { Metadata, Viewport } from 'next';
import { type PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';

import './styles/reset.css';
import '@radix-ui/themes/styles.css';

export const metadata: Metadata = {
  title: 'Swedball',
  description: 'Swedish data mining project'
};

export const viewport: Viewport = {
  width: 'device-width',
  userScalable: false
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <ThemeProvider attribute="class">
          <Theme appearance="dark" accentColor="orange" grayColor="olive" radius="large">
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}

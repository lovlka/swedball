import type { Metadata, Viewport } from 'next';
import { type PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';
import StoreProvider from '@/state/store-provider';
import Header from './header';
import Footer from './footer';

import '@radix-ui/themes/styles.css';
import './styles/layout.css';

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
          <Theme accentColor="orange" grayColor="olive" radius="large">
            <StoreProvider>
              <Header />
              <main>
                {children}
              </main>
              <Footer />
            </StoreProvider>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}

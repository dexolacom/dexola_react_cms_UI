import './globals.css';
import Head from 'next/head';

import { Kanit, Roboto_Mono } from 'next/font/google';
import StyledComponentsRegistry from '../../lib/registry';

export const metadata = {
  title: 'Dexola',
  description: 'Generated by create next app',
};

const kanit = Kanit({
  variable: '--font-kanit',
  weight: ['300', '400', '500'],
  style: ['normal'],
  subsets: ['latin', 'latin-ext'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  weight: ['300', '400', '500'],
  style: ['normal'],
  subsets: ['latin', 'latin-ext'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>

      <body>
        {children}
        {/* <StyledComponentsRegistry>{children}</StyledComponentsRegistry> */}
      </body>
    </html>
  );
}

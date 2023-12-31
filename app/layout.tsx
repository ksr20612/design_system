import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_KR, Roboto } from 'next/font/google';
import Recoil from 'components/Recoil';

const notoSans = Noto_Sans_KR({ subsets: ['latin'], variable: '--font-noto-sans' });
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${notoSans.variable} font-noto ${roboto.variable} roboto`}>
        <Recoil>{children}</Recoil>
      </body>
    </html>
  );
}

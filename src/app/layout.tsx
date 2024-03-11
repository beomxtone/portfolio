import localFont from 'next/font/local';
import CssBaseline from '@mui/material/CssBaseline';

import type { Metadata } from 'next';

import Provider from '@/app/Provider';

export const metadata: Metadata = {
  title: "Asher's portfolio",
  description: 'My name is Beomseok Seo, Welcome to my portfolio',
};

const Pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
});

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang='en' className={Pretendard.className}>
      <Provider>
        <CssBaseline />
        <body>{children}</body>
      </Provider>
    </html>
  );
};

export default RootLayout;

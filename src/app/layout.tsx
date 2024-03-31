/** @jsxImportSource react */

import localFont from 'next/font/local';
import CssBaseline from '@mui/material/CssBaseline';

import type { Metadata } from 'next';

import Provider from '@/app/Provider';

export const metadata: Metadata = {
  title: '프론트엔드 개발자 서범석 포트폴리오',
  description: '재생, 다음 곡을 눌러 프로젝트 미리보기',
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
      <body>
        <Provider>
          <CssBaseline />
          {children}
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

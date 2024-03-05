import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Asher's portfolio",
  description: 'My name is Beomseok Seo, Welcome to my portfolio',
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

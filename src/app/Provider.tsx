'use client';

import { ThemeProvider } from '@mui/material/styles';
import { RecoilRoot } from 'recoil';

import theme from '@/styles/theme';

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RecoilRoot>
  );
};

export default Provider;

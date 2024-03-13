'use client';

import { ThemeProvider } from '@mui/material/styles';
import { RecoilRoot } from 'recoil';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import theme from '@/styles/theme';

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <RecoilRoot>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AppRouterCacheProvider>
    </RecoilRoot>
  );
};

export default Provider;

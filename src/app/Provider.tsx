'use client';

import { RecoilRoot } from 'recoil';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import ThemeModeProvider from '@/app/ThemeModeProvider';

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <RecoilRoot>
      <AppRouterCacheProvider>
        <ThemeModeProvider>{children}</ThemeModeProvider>
      </AppRouterCacheProvider>
    </RecoilRoot>
  );
};

export default Provider;

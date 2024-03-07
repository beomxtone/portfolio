'use client';

import { ThemeProvider } from '@mui/material/styles';

import theme from '@/styles/theme';

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;

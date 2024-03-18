import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRecoilValue } from 'recoil';

import { darkThemeState } from '@/states/theme';

interface ThemeModeProviderProps {
  children: React.ReactNode;
}

const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
  const toggleDarkMode = useRecoilValue(darkThemeState);
  const theme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light',
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeModeProvider;

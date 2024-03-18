import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { ContentWrapper } from '@/styles/common';

interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  const theme = useTheme();
  const backColor =
    theme.palette.mode === 'dark'
      ? 'rgba(0, 0, 0, 0.3)'
      : 'rgba(255, 255, 255, 0.2)';

  return (
    <ContentWrapper>
      <Box sx={{ backgroundColor: backColor, borderRadius: 4, padding: 4 }}>
        {children}
      </Box>
    </ContentWrapper>
  );
};

export default Content;

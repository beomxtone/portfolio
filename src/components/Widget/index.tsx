'use client';

import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const Layout = styled('div')(({ theme }) => ({
  height: 'calc(100vh - 8px)',
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  borderRadius: 32,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const LargeLayout = styled(Layout)({
  aspectRatio: '1/1',
  margin: '0 auto',
});

interface Props {
  children: React.ReactNode;
}

const Widget = ({ children }: Props) => {
  const isLarge = useMediaQuery('(min-aspect-ratio: 1/1)');

  return (
    <main>
      {isLarge ? (
        <LargeLayout>{children}</LargeLayout>
      ) : (
        <Layout>{children}</Layout>
      )}
    </main>
  );
};

export default Widget;

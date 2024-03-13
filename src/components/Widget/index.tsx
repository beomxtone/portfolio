'use client';

import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

import Background from '@/components/Background';
import MusicPlayer from '@/components/MusicPlayer';

const Layout = styled('div')(({ theme }) => ({
  height: 'calc(100vh)',
  backgroundColor:
    theme.palette.mode === 'light'
      ? 'rgba(255,255,255,0.4)'
      : 'rgba(0,0,0,0.4)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const LargeLayout = styled(Layout)({
  aspectRatio: '1/1',
  margin: '0 auto',
  borderRadius: 32,
});

const Content = styled('div')({
  height: '80vh',
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

interface WidgetProps {
  children: React.ReactNode;
}

const Widget = ({ children }: WidgetProps) => {
  const isLarge = useMediaQuery('(min-aspect-ratio: 1/1)');

  return (
    <Background>
      {isLarge ? (
        <LargeLayout>
          <Content>{children}</Content>
          <MusicPlayer duration={5} />
        </LargeLayout>
      ) : (
        <Layout>
          <Content>{children}</Content>
          <MusicPlayer duration={5} />
        </Layout>
      )}
    </Background>
  );
};

export default Widget;

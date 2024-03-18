'use client';

import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import { scrollIndexState } from '@/states/musicPlayer';

import Background from '@/components/Background';
import MusicPlayer from '@/components/MusicPlayer';

const Layout = styled('div')(({ theme }) => ({
  height: '100svh',
  padding: '32px 0',
  backgroundColor:
    theme.palette.mode === 'light'
      ? 'rgba(255,255,255,0.4)'
      : 'rgba(0,0,0,0.6)',
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
  height: '80svh',
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
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [scrollIndex, setScrollIndex] = useRecoilState(scrollIndexState);

  let maxScroll = 0;

  const handleScroll = useCallback((): void => {
    if (!contentRef.current) return;

    const { scrollTop } = contentRef.current;

    if (scrollTop === 0) {
      setScrollIndex(0);
      return;
    }

    setScrollIndex(scrollTop);
  }, []);

  if (contentRef.current) {
    const { scrollHeight, clientHeight } = contentRef.current;
    maxScroll = scrollHeight - clientHeight;
  }

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = scrollIndex;
    }
  }, [scrollIndex]);

  const InnerLayout = (
    <>
      <Content
        ref={(el) => {
          contentRef.current = el;
          setIsMounted(!!el);
        }}
        onScroll={handleScroll}
      >
        {children}
      </Content>
      <MusicPlayer duration={isMounted ? maxScroll : 0} />
    </>
  );

  return (
    <Background>
      {isLarge ? (
        <LargeLayout>{InnerLayout}</LargeLayout>
      ) : (
        <Layout>{InnerLayout}</Layout>
      )}
    </Background>
  );
};

export default Widget;

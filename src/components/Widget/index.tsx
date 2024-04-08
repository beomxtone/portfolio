'use client';

import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { scrollIndexState } from '@/states/musicPlayer';
import { isScrollState } from '@/states/coverImage';
import useThrottleScroll from '@/hooks/useThrottleScroll';

import Background from '@/components/Background';
import MusicPlayer from '@/components/MusicPlayer';

const Layout = styled('div')(({ theme }) => ({
  height: '100svh',
  paddingBottom: 32,
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
  const [isScroll, setIsScroll] = useRecoilState(isScrollState);
  const setScrollIndex = useSetRecoilState(scrollIndexState);

  let maxScroll = 0;
  if (contentRef.current) {
    const { scrollHeight, clientHeight } = contentRef.current;
    maxScroll = scrollHeight - clientHeight;
  }

  const throttleScrollIndex = useThrottleScroll(100, contentRef.current);

  useEffect(() => {
    setScrollIndex(throttleScrollIndex);
    if (throttleScrollIndex === 0) setIsScroll(false);
    else if (throttleScrollIndex !== 0 && !isScroll) setIsScroll(true);
  }, [throttleScrollIndex]);

  const InnerLayout = (
    <>
      <Content
        ref={(el) => {
          contentRef.current = el;
          setIsMounted(!!el);
        }}
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

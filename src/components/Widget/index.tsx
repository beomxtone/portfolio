'use client';

import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import useThrottleScroll from '@/hooks/useThrottleScroll';
import useThrottle from '@/hooks/useThrottle';
import { coverImageData } from '@/types/coverImage';
import { isScrollState } from '@/states/coverImage';
import { scrollIndexState } from '@/states/scrollIndex';

import Background from '@/components/Background';
import MusicPlayer from '@/components/MusicPlayer';
import DesktopCoverImage from '@/components/DesktopCoverImage';
import MobileCoverImage from '@/components/MobileCoverImage';

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
  props: coverImageData;
}

const Widget = ({ children, props }: WidgetProps) => {
  const isLarge = useMediaQuery('(min-aspect-ratio: 1/1)');
  const isDesktop = useMediaQuery('(min-aspect-ratio: 1/1.5)');

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isScroll, setIsScroll] = useRecoilState(isScrollState);
  const [scrollIndex, setScrollIndex] = useRecoilState(scrollIndexState);

  let maxScroll = 0;
  if (contentRef.current) {
    const { scrollHeight, clientHeight } = contentRef.current;
    maxScroll = scrollHeight - clientHeight;
  }

  // 화면 스크롤했을 때 슬라이더 제어
  const throttleScrollIndex = useThrottleScroll(100, contentRef.current);

  useEffect(() => {
    setScrollIndex(throttleScrollIndex);
    if (throttleScrollIndex === 0) setIsScroll(false);
    else if (throttleScrollIndex !== 0 && !isScroll) setIsScroll(true);
  }, [throttleScrollIndex]);

  // 슬라이더를 움직였을 때 화면 스크롤
  const updateIndex = () => {
    if (contentRef.current) {
      contentRef.current.scrollTop = scrollIndex;
    }
  };
  const throttledUpdateIndex = useThrottle(updateIndex, 50);

  useEffect(() => {
    throttledUpdateIndex();
  }, [scrollIndex]);

  const InnerLayout = (
    <>
      <Content
        ref={(el) => {
          contentRef.current = el;
          setIsMounted(!!el);
        }}
      >
        {isDesktop ? (
          <DesktopCoverImage props={props} />
        ) : (
          <MobileCoverImage props={props} />
        )}
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

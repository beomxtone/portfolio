import React, { MutableRefObject, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import { useTheme } from '@mui/material/styles';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';

import { MAX_PAGE_LENGTH } from '@/constants';
import { pageIndexState } from '@/states/pageIndex';

import PlayButton from '@/components/MusicPlayer/PlayButton';

interface ControlButtonProps {
  duration: number;
  mainIconColor: string;
  scrollAnimationRef: MutableRefObject<NodeJS.Timeout | undefined>;
}

const ControlButton = ({
  duration,
  mainIconColor,
  scrollAnimationRef,
}: ControlButtonProps) => {
  const router = useRouter();
  const theme = useTheme();

  const [pageIndex, setPageIndex] = useRecoilState(pageIndexState);

  useEffect(() => {
    switch (pageIndex) {
      case 0:
        router.push('/');
        break;
      case 1:
        router.push('/nag');
        break;
      case 2:
        router.push('/dashboard');
        break;
      case 3:
        router.push('/house');
        break;
      case 4:
        router.push('/javascript');
        break;
      case 5:
        router.push('/contact');
        break;
      default:
        setPageIndex(0);
        router.push('/');
    }
  }, [pageIndex]);

  const disableIconColor =
    theme.palette.mode === 'dark'
      ? 'rgb(255 255 255 / 16%)'
      : 'rgb(0 0 0 / 16%)';

  const handlePrevClick = () => {
    if (pageIndex === 0) return;
    clearInterval(scrollAnimationRef.current);
    setPageIndex((prev) => prev - 1);
  };

  const handleNextClick = () => {
    if (pageIndex === MAX_PAGE_LENGTH) return;
    clearInterval(scrollAnimationRef.current);
    setPageIndex((prev) => prev + 1);
  };

  return (
    <>
      <IconButton
        aria-label='previous button'
        onClick={handlePrevClick}
        disabled={pageIndex === 0}
      >
        <FastRewindRounded
          fontSize='large'
          htmlColor={pageIndex === 0 ? disableIconColor : mainIconColor}
        />
      </IconButton>
      <PlayButton
        duration={duration}
        mainIconColor={mainIconColor}
        scrollAnimationRef={scrollAnimationRef}
      />
      <IconButton
        aria-label='next button'
        onClick={handleNextClick}
        disabled={pageIndex === MAX_PAGE_LENGTH}
      >
        <FastForwardRounded
          fontSize='large'
          htmlColor={
            pageIndex === MAX_PAGE_LENGTH ? disableIconColor : mainIconColor
          }
        />
      </IconButton>
    </>
  );
};

export default React.memo(ControlButton);

'use client';

import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import RepeatRounded from '@mui/icons-material/SettingsBackupRestoreRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';

import { contentIndexState, pageIndexState } from '@/states/musicPlayer';

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

interface MusicPlayerProps {
  duration: number;
}

const MusicPlayer = ({ duration }: MusicPlayerProps) => {
  const router = useRouter();
  const theme = useTheme();

  const [repeat, setRepeat] = useState<boolean>(true);
  const [contentIndex, setContentIndex] = useRecoilState(contentIndexState);
  const [pageIndex, setPageIndex] = useRecoilState(pageIndexState);

  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const disableIconColor =
    theme.palette.mode === 'dark'
      ? 'rgb(255 255 255 / 16%)'
      : 'rgb(0 0 0 / 16%)';

  const onSliderChange = (value: number) => {
    setContentIndex(value);
    if (value === duration) {
      setRepeat(false);
      return;
    }
    setRepeat(true);
  };

  const handlePlayClick = () => {
    setContentIndex((prev) => prev + 1);
    if (contentIndex === duration - 1) {
      setRepeat(false);
    }
  };

  const handleRepeatClick = () => {
    setContentIndex(0);
    setRepeat(true);
  };

  const handlePrevClick = () => {
    if (pageIndex === 0) return;
    setPageIndex((prev) => prev - 1);
  };

  const handleNextClick = () => {
    if (pageIndex === duration) return;
    setPageIndex((prev) => prev + 1);
  };

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
    setContentIndex(0);
  }, [pageIndex]);

  return (
    <Box
      sx={{
        width: '100%',
        height: '20vh',
        overflow: 'hidden',
        padding: '16px',
        maxWidth: '540px',
        margin: '0 auto',
      }}
    >
      <Slider
        aria-label='time-indicator'
        size='small'
        value={contentIndex}
        min={0}
        step={1}
        max={duration}
        onChange={(_, value) => onSliderChange(value as number)}
        sx={{
          color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
          height: 4,
          '& .MuiSlider-thumb': {
            width: 8,
            height: 8,
            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
            '&::before': {
              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
            },
            '&:hover, &.Mui-focusVisible': {
              boxShadow: `0px 0px 0px 8px ${
                theme.palette.mode === 'dark'
                  ? 'rgb(255 255 255 / 16%)'
                  : 'rgb(0 0 0 / 16%)'
              }`,
            },
            '&.Mui-active': {
              width: 20,
              height: 20,
            },
          },
          '& .MuiSlider-rail': {
            opacity: 0.28,
          },
        }}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: -2,
        }}
      >
        <TinyText>{contentIndex}:00</TinyText>
        <TinyText>{duration}:00</TinyText>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: -1,
        }}
      >
        {pageIndex === 0 ? (
          <IconButton aria-label='previous button' disabled>
            <FastRewindRounded fontSize='large' htmlColor={disableIconColor} />
          </IconButton>
        ) : (
          <IconButton aria-label='previous button' onClick={handlePrevClick}>
            <FastRewindRounded fontSize='large' htmlColor={mainIconColor} />
          </IconButton>
        )}
        {repeat ? (
          <IconButton aria-label='play' onClick={handlePlayClick}>
            <PlayArrowRounded
              sx={{ fontSize: '3rem' }}
              htmlColor={mainIconColor}
            />
          </IconButton>
        ) : (
          <IconButton aria-label='repeat' onClick={handleRepeatClick}>
            <RepeatRounded
              sx={{ fontSize: '3rem' }}
              htmlColor={mainIconColor}
            />
          </IconButton>
        )}
        {pageIndex === duration ? (
          <IconButton aria-label='next button' disabled>
            <FastForwardRounded fontSize='large' htmlColor={disableIconColor} />
          </IconButton>
        ) : (
          <IconButton aria-label='next button' onClick={handleNextClick}>
            <FastForwardRounded fontSize='large' htmlColor={mainIconColor} />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default MusicPlayer;

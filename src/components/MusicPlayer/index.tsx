'use client';

import { useEffect, useRef, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';

import { pageIndexState } from '@/states/pageIndex';
import { formatDuration } from '@/utils/times';
import { MAX_PAGE_LENGTH } from '@/constants';
import { darkThemeState } from '@/states/theme';
import { scrollIndexState } from '@/states/scrollIndex';

import ControlButton from '@/components/MusicPlayer/ControlButton';

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
  const theme = useTheme();

  const [position, setPosition] = useRecoilState(scrollIndexState);
  const setToggleDarkMode = useSetRecoilState(darkThemeState);

  const scrollAnimationRef = useRef<ReturnType<typeof setInterval>>();

  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';

  const toggleTheme = () => {
    setToggleDarkMode((prev) => !prev);
  };

  const handleSliderChange = (value: number) => {
    setPosition(value);
    if (value >= duration) return;
    clearInterval(scrollAnimationRef.current);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '20svh',
        overflow: 'hidden',
        padding: '16px',
        maxWidth: '540px',
        margin: '0 auto',
      }}
    >
      <Slider
        size='small'
        value={position}
        min={0}
        step={1}
        max={duration}
        onChange={(_, value) => handleSliderChange(value as number)}
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
          '& .MuiSlider-track': {
            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
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
        <TinyText>{formatDuration(position)}</TinyText>
        <TinyText>{formatDuration(duration)}</TinyText>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: -1,
        }}
      >
        <IconButton
          sx={{ mr: 'min(10vw, 140px)' }}
          aria-label='theme button'
          onClick={toggleTheme}
        >
          {theme.palette.mode === 'light' ? (
            <WbSunnyRoundedIcon sx={{ color: 'rgba(0, 0, 0, 0.8)' }} />
          ) : (
            <DarkModeRoundedIcon sx={{ color: 'rgba(255, 255, 255, 0.8)' }} />
          )}
        </IconButton>
        <ControlButton
          duration={duration}
          mainIconColor={mainIconColor}
          scrollAnimationRef={scrollAnimationRef}
        />
        <IconButton sx={{ ml: 'min(10vw, 140px)' }} aria-label='list button'>
          <FormatListBulletedRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MusicPlayer;

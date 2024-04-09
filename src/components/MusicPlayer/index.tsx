'use client';

import { useEffect, useRef, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import RepeatRounded from '@mui/icons-material/SettingsBackupRestoreRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';

import { scrollIndexState, pageIndexState } from '@/states/musicPlayer';
import { formatDuration } from '@/utils/times';
import { MAX_PAGE_LENGTH } from '@/constants';
import { darkThemeState } from '@/states/theme';

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

interface ControlButtonProps {
  repeat: boolean;
  paused: boolean;
  handleRepeatClick: () => void;
  handlePauseClick: () => void;
  handlePlayClick: () => void;
  mainIconColor: string;
}

const ControlButton = ({
  repeat,
  paused,
  handleRepeatClick,
  handlePauseClick,
  handlePlayClick,
  mainIconColor,
}: ControlButtonProps) => {
  let iconButtonProps;
  let icon;

  if (repeat) {
    iconButtonProps = { 'aria-label': 'repeat', onClick: handleRepeatClick };
    icon = (
      <RepeatRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
    );
  } else if (paused) {
    iconButtonProps = { 'aria-label': 'pause', onClick: handlePauseClick };
    icon = <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />;
  } else {
    iconButtonProps = { 'aria-label': 'play', onClick: handlePlayClick };
    icon = (
      <PlayArrowRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
    );
  }

  return <IconButton {...iconButtonProps}>{icon}</IconButton>;
};

interface MusicPlayerProps {
  duration: number;
}

const MusicPlayer = ({ duration }: MusicPlayerProps) => {
  const router = useRouter();
  const theme = useTheme();

  const [paused, setPaused] = useState<boolean>(false);
  const [repeat, setRepeat] = useState<boolean>(false);
  const [position, setPosition] = useRecoilState(scrollIndexState);
  const [pageIndex, setPageIndex] = useRecoilState(pageIndexState);
  const setToggleDarkMode = useSetRecoilState(darkThemeState);
  const scrollAnimationRef = useRef<ReturnType<typeof setInterval>>();

  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const disableIconColor =
    theme.palette.mode === 'dark'
      ? 'rgb(255 255 255 / 16%)'
      : 'rgb(0 0 0 / 16%)';

  const toggleTheme = () => {
    setToggleDarkMode((prev) => !prev);
  };

  const handleSliderChange = (value: number) => {
    setPosition(value);
    if (value >= duration) {
      setRepeat(true);
      return;
    }
    setRepeat(false);
    setPaused(false);
    clearInterval(scrollAnimationRef.current);
  };

  const handlePlayClick = () => {
    setPaused(true);
    scrollAnimationRef.current = setInterval(() => {
      setPosition((prev) => prev + 1);
    }, 10);
  };

  const handlePauseClick = () => {
    setPaused(false);
    clearInterval(scrollAnimationRef.current);
  };

  const handleRepeatClick = () => {
    setPosition(0);
    setRepeat(false);
  };

  const handlePrevClick = () => {
    if (pageIndex === 0) return;
    if (!paused) setPaused(!paused);
    clearInterval(scrollAnimationRef.current);
    setPageIndex((prev) => prev - 1);
  };

  const handleNextClick = () => {
    if (pageIndex === MAX_PAGE_LENGTH) return;
    if (!paused) setPaused(!paused);
    clearInterval(scrollAnimationRef.current);
    setPageIndex((prev) => prev + 1);
  };

  useEffect(() => {
    setPosition(0);
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

  useEffect(() => {
    if (duration === 0) return;
    if (repeat) {
      setRepeat(false);
    }
    if (position + 1 >= duration) {
      clearInterval(scrollAnimationRef.current);
      setRepeat(true);
      setPaused(false);
    }
  }, [position]);

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
        {pageIndex === 0 ? (
          <IconButton aria-label='previous button' disabled>
            <FastRewindRounded fontSize='large' htmlColor={disableIconColor} />
          </IconButton>
        ) : (
          <IconButton aria-label='previous button' onClick={handlePrevClick}>
            <FastRewindRounded fontSize='large' htmlColor={mainIconColor} />
          </IconButton>
        )}
        <ControlButton
          repeat={repeat}
          paused={paused}
          handleRepeatClick={handleRepeatClick}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
          mainIconColor={mainIconColor}
        />
        {pageIndex === MAX_PAGE_LENGTH ? (
          <IconButton aria-label='next button' disabled>
            <FastForwardRounded fontSize='large' htmlColor={disableIconColor} />
          </IconButton>
        ) : (
          <IconButton aria-label='next button' onClick={handleNextClick}>
            <FastForwardRounded fontSize='large' htmlColor={mainIconColor} />
          </IconButton>
        )}
        <IconButton sx={{ ml: 'min(10vw, 140px)' }} aria-label='list button'>
          <FormatListBulletedRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MusicPlayer;

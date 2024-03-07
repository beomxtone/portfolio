'use client';

import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import RepeatRounded from '@mui/icons-material/SettingsBackupRestoreRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

interface Props {
  duration: number;
  isFirst?: boolean;
  isLast?: boolean;
}

const MusicPlayer = ({ duration, isFirst, isLast }: Props) => {
  const theme = useTheme();
  const [position, setPosition] = useState(0);
  const [repeat, setRepeat] = useState(true);
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const disableIconColor =
    theme.palette.mode === 'dark'
      ? 'rgb(255 255 255 / 16%)'
      : 'rgb(0 0 0 / 16%)';

  const onSliderChange = (value: number) => {
    setPosition(value);
    if (value === duration) {
      setRepeat(false);
      return;
    }
    setRepeat(true);
  };

  const handlePlayClick = () => {
    setPosition((prev) => prev + 1);
    if (position === duration - 1) {
      setRepeat(false);
    }
  };

  const handleRepeatClick = () => {
    setPosition(0);
    setRepeat(true);
  };

  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        padding: '16px',
      }}
    >
      <Slider
        aria-label='time-indicator'
        size='small'
        value={position}
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
        <TinyText>{position}:00</TinyText>
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
        {isFirst ? (
          <IconButton aria-label='previous button' disabled>
            <FastRewindRounded fontSize='large' htmlColor={disableIconColor} />
          </IconButton>
        ) : (
          <IconButton aria-label='previous button'>
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
        {isLast ? (
          <IconButton aria-label='next button' disabled>
            <FastForwardRounded fontSize='large' htmlColor={disableIconColor} />
          </IconButton>
        ) : (
          <IconButton aria-label='next button'>
            <FastForwardRounded fontSize='large' htmlColor={mainIconColor} />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default MusicPlayer;

import RepeatRounded from '@mui/icons-material/SettingsBackupRestoreRounded';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import IconButton from '@mui/material/IconButton';
import React, { MutableRefObject, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { scrollIndexState } from '@/states/scrollIndex';

interface ControlButtonProps {
  duration: number;
  mainIconColor: string;
  scrollAnimationRef: MutableRefObject<NodeJS.Timeout | undefined>;
}

const PlayButton = ({
  duration,
  mainIconColor,
  scrollAnimationRef,
}: ControlButtonProps) => {
  const [position, setPosition] = useRecoilState(scrollIndexState);

  const [paused, setPaused] = useState<boolean>(false);
  const [repeat, setRepeat] = useState<boolean>(false);

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

  if (repeat) {
    return (
      <IconButton aria-label='repeat' onClick={handleRepeatClick}>
        <RepeatRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
      </IconButton>
    );
  }

  if (paused) {
    return (
      <IconButton aria-label='pause' onClick={handlePauseClick}>
        <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
      </IconButton>
    );
  }

  return (
    <IconButton aria-label='play' onClick={handlePlayClick}>
      <PlayArrowRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
    </IconButton>
  );
};

export default React.memo(PlayButton);

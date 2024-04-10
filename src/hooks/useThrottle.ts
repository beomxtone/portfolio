import { useRef } from 'react';

const useThrottle = <T extends () => void>(
  callback: T,
  throttleTime: number | undefined = 100,
): (() => void) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return () => {
    if (timer.current) return;

    callback();
    timer.current = setTimeout(() => {
      timer.current = null;
    }, throttleTime);
  };
};

export default useThrottle;

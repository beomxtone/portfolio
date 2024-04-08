import { useEffect, useRef, useState } from 'react';

const useThrottleScroll = (
  delay: number,
  element: HTMLDivElement | null,
): number => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const throttleTimeout = useRef<NodeJS.Timeout | null>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!throttleTimeout.current) {
        throttleTimeout.current = setTimeout(() => {
          requestRef.current = requestAnimationFrame(() => {
            setScrollPosition(element?.scrollTop ?? 0);
          });
          throttleTimeout.current = null;
        }, delay);
      }
    };

    if (element) element.addEventListener('scroll', handleScroll);

    return () => {
      if (element) element.removeEventListener('scroll', handleScroll);
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [delay, element]);

  return scrollPosition;
};

export default useThrottleScroll;

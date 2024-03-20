import { keyframes } from '@emotion/react';

export const ShowOpacity = keyframes`
  0% {
    opacity: 0;
  }
  1000% {
    opacity: 1;
  }
`;

export const UpFromBottom = keyframes`
  0% { bottom: -100% }
  100% { bottom: 0 }
`;

export const DownToBottom = keyframes`
  0% { bottom: 0 }
  100% { bottom: -100% }
`;

export const DownFromTop = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0px);
  }
`;

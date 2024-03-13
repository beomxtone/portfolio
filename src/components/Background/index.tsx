'use client';

import { useRecoilValue } from 'recoil';
import { styled } from '@mui/material/styles';

import { pageIndexState } from '@/states/musicPlayer';

const DefaultBackground = styled('section')({
  width: '100%',
  height: '100%',
});

const BlurBackground = styled(DefaultBackground)({
  backdropFilter: 'blur(80px)',
});

interface BackgroundProps {
  children: React.ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  const pageIndex = useRecoilValue(pageIndexState);
  const pageTitles: string[] = [
    'introduce',
    'nag',
    'dashboard',
    'house',
    'javascript',
  ];

  const BackgroundContent = styled(DefaultBackground)({
    backgroundImage: `url("/images/${pageTitles[pageIndex]}/title.png")`,
  });

  return (
    <BackgroundContent>
      <BlurBackground>{children}</BlurBackground>
    </BackgroundContent>
  );
};

export default Background;

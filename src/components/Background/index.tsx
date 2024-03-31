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

interface backgroundContent {
  backgroundtitle: string;
}
const BackgroundContent = styled(DefaultBackground)<backgroundContent>(
  ({ backgroundtitle }) => ({
    backgroundImage: `url("/images/${backgroundtitle}/title.png")`,
  }),
);

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

  return (
    <BackgroundContent backgroundtitle={pageTitles[pageIndex]}>
      <BlurBackground>{children}</BlurBackground>
    </BackgroundContent>
  );
};

export default Background;

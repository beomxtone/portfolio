'use client';

import { useRecoilValue } from 'recoil';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';

import { pageIndexState } from '@/states/pageIndex';

const pageTitles: string[] = [
  'introduce',
  'nag',
  'dashboard',
  'house',
  'javascript',
];

const DefaultBackground = styled('section')({
  width: '100%',
  height: '100%',
});

const BlurBackground = styled(DefaultBackground)({
  backdropFilter: 'blur(80px)',
});

interface backgroundContent {
  title: string;
}
const BackgroundContent = styled(DefaultBackground)<backgroundContent>(
  ({ title }) => ({
    backgroundImage: `${title && `url("/images/${title}/title.png")`}`,
  }),
);

interface BackgroundProps {
  children: React.ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  const [title, setTitle] = useState<string>('');
  const pageIndex = useRecoilValue(pageIndexState);

  useEffect(() => {
    setTitle(pageTitles[pageIndex]);
  }, [pageIndex]);

  return (
    <BackgroundContent title={title}>
      <BlurBackground>{children}</BlurBackground>
    </BackgroundContent>
  );
};

export default Background;

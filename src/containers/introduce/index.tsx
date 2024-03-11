'use client';

import { useMediaQuery } from '@mui/material';
import { useRecoilState } from 'recoil';

import { introduceIndexStore } from '@/containers/introduce/store';

import MusicPlayer from '../../components/MusicPlayer';
import Widget from '@/components/Widget';
import DesktopCoverImage from '@/components/DesktopCoverImage';
import MobileCoverImage from '../../components/MobileCoverImage';

const IntroducePage = () => {
  const [introduceIndex, setIntroduceIndex] =
    useRecoilState(introduceIndexStore);

  const isDesktop = useMediaQuery('(min-aspect-ratio: 1/1.5)');

  return (
    <Widget>
      {introduceIndex === 0 && isDesktop ? (
        <DesktopCoverImage
          title='Beomseok Seo'
          subTitle='Frontend Developer'
          imageSrc='/images/introduce/profile.png'
        />
      ) : (
        <MobileCoverImage
          title='Beomseok Seo'
          subTitle='Frontend Developer'
          imageSrc='/images/introduce/profile.png'
        />
      )}
      <MusicPlayer duration={5} />
    </Widget>
  );
};

export default IntroducePage;

'use client';

import { useMediaQuery } from '@mui/material';
import { useRecoilValue } from 'recoil';

import { contentIndexState } from '@/states/musicPlayer';

import MusicPlayer from '@/components/MusicPlayer';
import Widget from '@/components/Widget';
import DesktopCoverImage from '@/components/DesktopCoverImage';
import MobileCoverImage from '@/components/MobileCoverImage';

const title: string = '명절 잔소리 영수증';
const subTitle: string = '가족 세대갈등 해소 플랫폼';
const imageSrc: string = '/images/nag/title.png';

const NagPage = () => {
  const contentIndex = useRecoilValue(contentIndexState);
  const isDesktop = useMediaQuery('(min-aspect-ratio: 1/1.5)');

  return (
    <Widget>
      {isDesktop ? (
        <DesktopCoverImage
          title={title}
          subTitle={subTitle}
          imageSrc={imageSrc}
        />
      ) : (
        <MobileCoverImage
          title={title}
          subTitle={subTitle}
          imageSrc={imageSrc}
        />
      )}
    </Widget>
  );
};

export default NagPage;

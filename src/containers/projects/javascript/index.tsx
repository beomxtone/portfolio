'use client';

import { useMediaQuery } from '@mui/material';

import Widget from '@/components/Widget';
import DesktopCoverImage from '@/components/DesktopCoverImage';
import MobileCoverImage from '@/components/MobileCoverImage';

const title: string = '자바스크립트 북스터디';
const subTitle: string = '모던 자바스크립트 Deep Dive - 이웅모';
const imageSrc: string = '/images/javascript/title.png';

const JavascriptPage = () => {
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

export default JavascriptPage;

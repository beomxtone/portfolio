'use client';

import { useMediaQuery } from '@mui/material';

import Widget from '@/components/Widget';
import DesktopCoverImage from '@/components/DesktopCoverImage';
import MobileCoverImage from '@/components/MobileCoverImage';

const title: string = '내집스캔';
const subTitle: string = '부동산 등기부등본 자동 분석 프로젝트';
const imageSrc: string = '/images/house/title.png';

const HousePage = () => {
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

export default HousePage;

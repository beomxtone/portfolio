'use client';

import { useMediaQuery } from '@mui/material';
import { useRecoilValue } from 'recoil';

import { contentIndexState } from '@/states/musicPlayer';

import MusicPlayer from '@/components/MusicPlayer';
import Widget from '@/components/Widget';
import DesktopCoverImage from '@/components/DesktopCoverImage';
import MobileCoverImage from '@/components/MobileCoverImage';

const title: string = '어크로스비 대시보드';
const subTitle: string = '매출 정보 데이터 시각화 프로젝트';
const imageSrc: string = '/images/dashboard/title.png';

const DashboardPage = () => {
  const contentIndex = useRecoilValue(contentIndexState);
  const isDesktop = useMediaQuery('(min-aspect-ratio: 1/1.5)');

  return (
    <Widget>
      {contentIndex === 0 && isDesktop ? (
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
      <MusicPlayer duration={5} />
    </Widget>
  );
};

export default DashboardPage;

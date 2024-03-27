'use client';

import { useMediaQuery } from '@mui/material';

import Widget from '@/components/Widget';
import DesktopCoverImage from '@/components/DesktopCoverImage';
import MobileCoverImage from '@/components/MobileCoverImage';
import Sentence from '@/components/Description/Sentence';
import Description from '@/components/Description';
import Header from '@/components/Header';

const title: string = '어크로스비 대시보드';
const subTitle: string = '매출 정보 데이터 시각화 프로젝트';
const imageSrc: string = '/images/dashboard/title.png';
const link: string = 'https://www.acrossb.net/';

const DashboardPage = () => {
  const isDesktop = useMediaQuery('(min-aspect-ratio: 1/1.5)');

  return (
    <>
      <Header
        title={title}
        subTitle={subTitle}
        imageSrc={imageSrc}
        link={link}
      />
      <Widget>
        {isDesktop ? (
          <DesktopCoverImage
            title={title}
            subTitle={subTitle}
            imageSrc={imageSrc}
            link={link}
          />
        ) : (
          <MobileCoverImage
            title={title}
            subTitle={subTitle}
            imageSrc={imageSrc}
            link={link}
          />
        )}

        <Description
          title='Description'
          summary='대시보드 데이터 시각화 프로젝트'
          period='2021.12 ~ 2022.04'
          position='풀스택 개발'
          skills='Vue.js, Nest.js, Vuex, AthenaDB, Chart.js'
          link={link}
        >
          <Sentence>&nbsp;</Sentence>
          <Sentence>&nbsp;</Sentence>
          <Sentence>&nbsp;</Sentence>
          <Sentence>&nbsp;</Sentence>
          <Sentence>&nbsp;</Sentence>
          <Sentence>&nbsp;</Sentence>
          <Sentence>&nbsp;</Sentence>
          <Sentence>&nbsp;</Sentence>
          <Sentence>&nbsp;</Sentence>
          <Sentence>&nbsp;</Sentence>
          <Sentence>&nbsp;</Sentence>
          <Sentence>&nbsp;</Sentence>
          <Sentence>&nbsp;</Sentence>
          <Sentence>&nbsp;</Sentence>
        </Description>
      </Widget>
    </>
  );
};

export default DashboardPage;

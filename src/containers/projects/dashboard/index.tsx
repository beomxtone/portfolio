'use client';

import { useMediaQuery } from '@mui/material';

import Widget from '@/components/Widget';
import DesktopCoverImage from '@/components/DesktopCoverImage';
import MobileCoverImage from '@/components/MobileCoverImage';
import Sentence from '@/components/Description/Sentence';
import Bold from '@/components/Bold';
import Description from '@/components/Description';
import Header from '@/components/Header';

const title: string = '어크로스비 대시보드';
const subTitle: string = '매출 정보 데이터 시각화 프로젝트';
const imageSrc: string = '/images/dashboard/title.png';

const DashboardPage = () => {
  const isDesktop = useMediaQuery('(min-aspect-ratio: 1/1.5)');

  return (
    <>
      <Header title={title} subTitle={subTitle} imageSrc={imageSrc} />
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

        <Description title='Description'>
          <Sentence>
            <Bold>대시보드 시각화 프로젝트</Bold>
          </Sentence>
          <Sentence>기간: 2021.12 ~ 2022.04</Sentence>
          <Sentence>역할: 풀스택 개발</Sentence>
          <Sentence>
            기술 스택: Vue.js, Nest.js, Vuex, AthenaDB, Chart.js
          </Sentence>
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

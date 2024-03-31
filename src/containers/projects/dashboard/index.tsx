'use client';

import { useMediaQuery } from '@mui/material';

import { ContentTitle } from '@/styles/common';

import Widget from '@/components/Widget';
import DesktopCoverImage from '@/components/DesktopCoverImage';
import MobileCoverImage from '@/components/MobileCoverImage';
import Sentence from '@/components/Description/Sentence';
import Description from '@/components/Description';
import Header from '@/components/Header';
import Bold from '@/components/Bold';
import Content from '@/components/Content';
import ImageContent from '@/components/ImageContent';

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
          skills='Typescript, Vue.js, Nest.js, Vuex, Jest, AthenaDB, Chart.js'
          profit='투자 설명회에서 성공적으로 시연 이후 서비스 중'
          link={link}
        />

        <Content>
          <ContentTitle>What I do</ContentTitle>
          <ImageContent
            src='/images/dashboard/dashboard-1.png'
            alt='dashboard-1'
          />
          <ImageContent
            src='/images/dashboard/dashboard-2.png'
            alt='dashboard-2'
          />
        </Content>
      </Widget>
    </>
  );
};

export default DashboardPage;

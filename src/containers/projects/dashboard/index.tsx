'use client';

import { ContentTitle } from '@/styles/common';

import Widget from '@/components/Widget';
import Description from '@/components/Description';
import Header from '@/components/Header';
import Content from '@/components/Content';
import ImageContent from '@/components/ImageContent';

const title: string = '어크로스비 대시보드';
const subtitle: string = '매출 정보 데이터 시각화 프로젝트';
const imageSrc: string = '/images/dashboard/title.webp';
const link: string = 'https://www.acrossb.net/';

const DashboardPage = () => {
  return (
    <>
      <Header
        props={{
          title,
          subtitle,
          imageSrc,
          link,
        }}
      />
      <Widget
        props={{
          title,
          subtitle,
          imageSrc,
          link,
        }}
      >
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
            src='/images/dashboard/dashboard-1.webp'
            alt='dashboard-1'
          />
          <ImageContent
            src='/images/dashboard/dashboard-2.webp'
            alt='dashboard-2'
          />
        </Content>
      </Widget>
    </>
  );
};

export default DashboardPage;

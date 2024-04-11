'use client';

import { ContentTitle } from '@/styles/common';

import Widget from '@/components/Widget';
import Header from '@/components/Header';
import Description from '@/components/Description';
import Content from '@/components/Content';
import Subtitle from '@/components/Subtitle';
import ImageContent from '@/components/ImageContent';

const title: string = '내집스캔';
const subtitle: string = '부동산 등기부등본 자동 분석 프로젝트';
const imageSrc: string = '/images/house/title.webp';
const link: string = 'https://www.naezipscan.com/';

const HousePage = () => {
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
          summary='부동산 등기부등본 자동분석 프로젝트'
          period='2021.11 ~ 2022.05'
          position='프론트엔드 개발자'
          skills='React, Scss'
          link={link}
        />

        <Content>
          <ContentTitle>What I do</ContentTitle>
          <Subtitle>집 유형 선택 페이지</Subtitle>
          <ImageContent src='/images/house/check.webp' alt='check' size={60} />
          <Subtitle>검색 안내 페이지</Subtitle>
          <ImageContent
            src='/images/house/search.webp'
            alt='search'
            size={60}
          />
          <Subtitle>한국 주소지 검색 기능</Subtitle>
          <ImageContent
            src='/images/house/search-detail.webp'
            alt='search-detail'
            size={60}
          />
          <Subtitle>양호, 주의, 위험에 따른 레포트</Subtitle>
          <ImageContent
            src='/images/house/report-safe.webp'
            alt='report-safe'
            size={60}
          />
          <Subtitle>레포트 상세 페이지</Subtitle>
          <ImageContent
            src='/images/house/report-danger.webp'
            alt='report-danger'
            size={60}
          />
        </Content>
      </Widget>
    </>
  );
};

export default HousePage;

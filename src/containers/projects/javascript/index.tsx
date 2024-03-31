'use client';

import { useMediaQuery } from '@mui/material';

import { ContentTitle } from '@/styles/common';

import Widget from '@/components/Widget';
import DesktopCoverImage from '@/components/DesktopCoverImage';
import MobileCoverImage from '@/components/MobileCoverImage';
import Header from '@/components/Header';
import Description from '@/components/Description';
import Content from '@/components/Content';
import Subtitle from '@/components/Subtitle';
import ImageContent from '@/components/ImageContent';

const title: string = '자바스크립트 북스터디';
const subTitle: string = '모던 자바스크립트 Deep Dive - 이웅모';
const imageSrc: string = '/images/javascript/title.png';
const github: string = 'https://github.com/deep-dive-to-js/study-js-deep-dive';

const JavascriptPage = () => {
  const isDesktop = useMediaQuery('(min-aspect-ratio: 1/1.5)');

  return (
    <>
      <Header
        title={title}
        subTitle={subTitle}
        imageSrc={imageSrc}
        github={github}
      />
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

        <Description
          title='Description'
          summary='모던 자바스크립트 Deep Dive 북스터디'
          period='2023.08 ~ 2024.02'
          position='스터디장'
          skills='Javascript, ES6'
          profit='삼성 청년 SW 아카데미 우수 스터디 2회 연속 선정'
          github={github}
        />

        <Content>
          <ContentTitle>What I do</ContentTitle>
          <Subtitle>규칙 및 Readme 작성</Subtitle>
          <ImageContent src='/images/javascript/readme.png' alt='readme' />
          <Subtitle>Issue 및 PR 템플릿 작성</Subtitle>
          <ImageContent src='/images/javascript/template.png' alt='template' />
          <Subtitle>각 주차별 퀴즈 진행</Subtitle>
          <ImageContent src='/images/javascript/quiz.png' alt='template' />
        </Content>
      </Widget>
    </>
  );
};

export default JavascriptPage;

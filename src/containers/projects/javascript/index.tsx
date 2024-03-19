'use client';

import { useMediaQuery } from '@mui/material';

import Widget from '@/components/Widget';
import DesktopCoverImage from '@/components/DesktopCoverImage';
import MobileCoverImage from '@/components/MobileCoverImage';
import Header from '@/components/Header';
import Sentence from '@/components/Description/Sentence';
import Description from '@/components/Description';
import Bold from '@/components/Bold';

const title: string = '자바스크립트 북스터디';
const subTitle: string = '모던 자바스크립트 Deep Dive - 이웅모';
const imageSrc: string = '/images/javascript/title.png';

const JavascriptPage = () => {
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
            <Bold>모던 자바스크립트 Deep Dive 북스터디</Bold>
          </Sentence>
          <Sentence>기간: 2023.08 ~ 2024.02</Sentence>
          <Sentence>역할: 스터디장</Sentence>
          <Sentence>기술 스택: Javascript, ES6</Sentence>
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

export default JavascriptPage;

'use client';

import { useMediaQuery } from '@mui/material';

import Widget from '@/components/Widget';
import DesktopCoverImage from '@/components/DesktopCoverImage';
import MobileCoverImage from '@/components/MobileCoverImage';
import Header from '@/components/Header';
import Sentence from '@/components/Description/Sentence';
import Description from '@/components/Description';

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
          github={github}
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

export default JavascriptPage;

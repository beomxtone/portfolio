'use client';

import { useMediaQuery } from '@mui/material';

import Widget from '@/components/Widget';
import DesktopCoverImage from '@/components/DesktopCoverImage';
import MobileCoverImage from '@/components/MobileCoverImage';
import Header from '@/components/Header';
import Description from '@/components/Description';
import Sentence from '@/components/Description/Sentence';
import Bold from '@/components/Bold';

const title: string = '내집스캔';
const subTitle: string = '부동산 등기부등본 자동 분석 프로젝트';
const imageSrc: string = '/images/house/title.png';
const link: string = 'https://www.naezipscan.com/';

const HousePage = () => {
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

        <Description title='Description'>
          <Sentence>
            <Bold>부동산 등기부등본 자동분석 프로젝트</Bold>
          </Sentence>
          <Sentence>기간: 2021.11 ~ 2022.05</Sentence>
          <Sentence>역할: 프론트엔드 개발자</Sentence>
          <Sentence>기술 스택: React, Scss</Sentence>
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

export default HousePage;

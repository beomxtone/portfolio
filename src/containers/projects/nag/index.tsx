'use client';

import { useMediaQuery } from '@mui/material';

import Widget from '@/components/Widget';
import DesktopCoverImage from '@/components/DesktopCoverImage';
import MobileCoverImage from '@/components/MobileCoverImage';
import Header from '@/components/Header';
import Sentence from '@/components/Description/Sentence';
import Bold from '@/components/Bold';
import Description from '@/components/Description';

const title: string = '명절 잔소리 영수증';
const subTitle: string = '가족 세대갈등 해소 플랫폼';
const imageSrc: string = '/images/nag/title.png';
const link: string = 'https://jansorry.vercel.app';

const NagPage = () => {
  const isDesktop = useMediaQuery('(min-aspect-ratio: 1/1.5)');

  return (
    <>
      <Header
        title={title}
        subTitle={subTitle}
        imageSrc={imageSrc}
        link={link}
        github='https://github.com/jansorry/jansorry-fe'
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
            <Bold>명절 잔소리 영수증</Bold>
          </Sentence>
          <Sentence>기간: 2024.01 ~ 2024.02</Sentence>
          <Sentence>역할: 프론트엔드 리더</Sentence>
          <Sentence>
            기술 스택: Typescript, Next 13, Vanilla Extract, Recoil
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

export default NagPage;

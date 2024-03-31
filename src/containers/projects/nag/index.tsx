'use client';

import { useMediaQuery } from '@mui/material';

import PreviewMe from '@/containers/projects/nag/PreviewMe';

import Widget from '@/components/Widget';
import DesktopCoverImage from '@/components/DesktopCoverImage';
import MobileCoverImage from '@/components/MobileCoverImage';
import Header from '@/components/Header';
import Description from '@/components/Description';

const title: string = '명절 잔소리 영수증';
const subTitle: string = '가족 세대갈등 해소 플랫폼';
const imageSrc: string = '/images/nag/title.png';
const link: string = 'https://jansorry.vercel.app';
const github: string = 'https://github.com/jansorry/jansorry-fe';

const NagPage = () => {
  const isDesktop = useMediaQuery('(min-aspect-ratio: 1/1.5)');

  return (
    <>
      <Header
        title={title}
        subTitle={subTitle}
        imageSrc={imageSrc}
        link={link}
        github={github}
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
          summary='가족 세대갈등 완화를 위한 SNS 플랫폼'
          period='2024.01 ~ 2024.02'
          position='프론트엔드 리더'
          skills='Typescript, Next 13, Vanilla Extract, Recoil'
          link={link}
          github={github}
        />

        <PreviewMe />
      </Widget>
    </>
  );
};

export default NagPage;

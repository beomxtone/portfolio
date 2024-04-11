'use client';

import Preview from '@/containers/projects/nag/Preview';

import Widget from '@/components/Widget';
import Header from '@/components/Header';
import Description from '@/components/Description';

const title: string = '명절 잔소리 영수증';
const subtitle: string = '가족 세대갈등 해소 플랫폼';
const imageSrc: string = '/images/nag/title.webp';
const link: string = 'https://jansorry.com';
const github: string = 'https://github.com/jansorry/jansorry-fe';

const NagPage = () => {
  return (
    <>
      <Header
        props={{
          title,
          subtitle,
          imageSrc,
          link,
          github,
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
          summary='가족 세대갈등 완화를 위한 SNS 플랫폼'
          period='2024.01 ~ 2024.02'
          position='프론트엔드 리더'
          skills='Typescript, Next 13, Vanilla Extract, Recoil'
          link={link}
          github={github}
        />

        <Preview />
      </Widget>
    </>
  );
};

export default NagPage;

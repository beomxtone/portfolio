'use client';

import { useMediaQuery } from '@mui/material';

import Skills from '@/containers/introduce/Skills';
import Aboutme from '@/containers/introduce/Aboutme';

import Widget from '@/components/Widget';
import DesktopCoverImage from '@/components/DesktopCoverImage';
import MobileCoverImage from '@/components/MobileCoverImage';
import Description from '@/components/Description';
import Sentence from '@/components/Description/Sentence';
import Bold from '@/components/Bold';
import Careers from './Careers';
import Header from '@/components/Header';

const title: string = 'Beomseok Seo';
const subTitle: string = 'Frontend Developer';
const imageSrc: string = '/images/introduce/title.png';

const IntroducePage = () => {
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

        <Description title='👋 Introduce'>
          <Sentence>안녕하세요.</Sentence>
          <Sentence>
            첫 화면을 중요하게 생각하는 <Bold>프론트엔드 개발자 서범석</Bold>
            입니다.
          </Sentence>
          <Sentence isLineBreak>
            팀원들과의 원활한 소통이 좋은 제품을 만들어낸다고 믿습니다.
          </Sentence>
          <Sentence>
            긍정적으로 소통하며 만들어낸 결과로 세상을 바꾸는 데 기여하고
            싶습니다.
          </Sentence>
        </Description>

        <Aboutme />
        <Skills />
        <Careers />
      </Widget>
    </>
  );
};

export default IntroducePage;

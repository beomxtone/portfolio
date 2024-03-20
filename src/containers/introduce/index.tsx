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
const link: string = 'https://github.com/beomxtone';

const IntroducePage = () => {
  const isDesktop = useMediaQuery('(min-aspect-ratio: 1/1.5)');

  return (
    <>
      <Header
        title={title}
        subTitle={subTitle}
        imageSrc={imageSrc}
        github={link}
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

        <Description title='👋 Introduce'>
          <Sentence>안녕하세요.</Sentence>
          <Sentence>
            <Bold>
              &quot;불가능해요.&quot; 대신 해결 방안을 같이 고민하는 프론트엔드
              개발자 서범석
            </Bold>
            입니다.
          </Sentence>
          <Sentence isLineBreak>
            저는 팀원들과의 원활한 소통이 좋은 제품을 만들어낸다고 믿습니다.
          </Sentence>
          <Sentence>
            적극적인 소통을 통해 만들어낸 결과물로 긍정적인 변화를 이끌어내고자
            합니다.
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

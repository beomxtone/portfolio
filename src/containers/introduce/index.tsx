'use client';

import { useMediaQuery } from '@mui/material';
import { useRecoilValue } from 'recoil';

import { contentIndexState } from '@/states/musicPlayer';

import Widget from '@/components/Widget';
import DesktopCoverImage from '@/components/DesktopCoverImage';
import MobileCoverImage from '@/components/MobileCoverImage';
import Description from '@/components/Description';

const title: string = 'Beomseok Seo';
const subTitle: string = 'Frontend Developer';
const imageSrc: string = '/images/introduce/title.png';

const IntroducePage = () => {
  const contentIndex = useRecoilValue(contentIndexState);
  const isDesktop = useMediaQuery('(min-aspect-ratio: 1/1.5)');

  return (
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

      <Description title='자기 소개'>
        <div>첫 화면을 중요하게 생각하는 서범석 입니다</div>
        <div>
          2년치 데이터를 다루는 페이지의 로딩 속도를 10초에서 2초로
          개선했습니다.
        </div>
        <div>
          이를 통해 유저 편의성에는 디자인뿐 아니라 성능도 중요하다는 것을
          생각하며 개발합니다.
        </div>
        <div>팀원들과의 원활한 소통이 좋은 제품을 만들어낸다고 믿습니다.</div>
        <div>
          긍정적으로 소통하며 만들어낸 결과로 세상을 바꾸는 데 기여하고
          싶습니다.
        </div>
      </Description>
    </Widget>
  );
};

export default IntroducePage;

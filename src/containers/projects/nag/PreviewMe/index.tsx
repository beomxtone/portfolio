import { styled } from '@mui/material/styles';
import Image from 'next/image';

import { ContentTitle } from '@/styles/common';

import Content from '@/components/Content';
import Bold from '@/components/Bold';

const Gif = styled(Image)({
  width: '70%',
  height: 'auto',
});

const SubtitleWrapper = styled('div')({
  margin: '24px 0 4px 0',
});

interface SubtitleProps {
  children: React.ReactNode;
}
const Subtitle = ({ children }: SubtitleProps) => {
  return (
    <SubtitleWrapper>
      <Bold>{children}</Bold>
    </SubtitleWrapper>
  );
};

const PreviewMe = () => {
  return (
    <Content>
      <ContentTitle>What I do</ContentTitle>
      <Subtitle>랜딩 페이지</Subtitle>
      <Gif
        src='/images/nag/landing.gif'
        alt='landing'
        width={0}
        height={0}
        sizes='100vw'
      />
      <Subtitle>카드 애니메이션</Subtitle>
      <Gif
        src='/images/nag/home-card.gif'
        alt='home-card'
        width={0}
        height={0}
        sizes='100vw'
      />
      <Subtitle>카테고리 페이지</Subtitle>
      <Gif
        src='/images/nag/category.gif'
        alt='category'
        width={0}
        height={0}
        sizes='100vw'
      />
      <Subtitle>카드 생성 및 모달</Subtitle>
      <Gif
        src='/images/nag/create-card.gif'
        alt='create-card'
        width={0}
        height={0}
        sizes='100vw'
      />
      <Subtitle>피드 무한 스크롤</Subtitle>
      <Gif
        src='/images/nag/feeds.gif'
        alt='feeds'
        width={0}
        height={0}
        sizes='100vw'
      />
      <Subtitle>피드 해시태그</Subtitle>
      <Gif
        src='/images/nag/feeds-hashtag.gif'
        alt='feeds-hashtag'
        width={0}
        height={0}
        sizes='100vw'
      />
    </Content>
  );
};

export default PreviewMe;

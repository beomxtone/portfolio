import { ContentTitle } from '@/styles/common';

import Content from '@/components/Content';
import ImageContent from '@/components/ImageContent';
import Subtitle from '@/components/Subtitle';

const PreviewMe = () => {
  return (
    <Content>
      <ContentTitle>What I do</ContentTitle>
      <Subtitle>랜딩 페이지</Subtitle>
      <ImageContent src='/images/nag/landing.gif' alt='landing' size={70} />
      <Subtitle>카드 애니메이션</Subtitle>
      <ImageContent src='/images/nag/home-card.gif' alt='home-card' size={70} />
      <Subtitle>카테고리 페이지</Subtitle>
      <ImageContent src='/images/nag/category.gif' alt='category' size={70} />
      <Subtitle>카드 생성 및 모달</Subtitle>
      <ImageContent
        src='/images/nag/create-card.gif'
        alt='create-card'
        size={70}
      />
      <Subtitle>피드 무한 스크롤</Subtitle>
      <ImageContent src='/images/nag/feeds.gif' alt='feeds' size={70} />
      <Subtitle>피드 해시태그</Subtitle>
      <ImageContent
        src='/images/nag/feeds-hashtag.gif'
        alt='feeds-hashtag'
        size={70}
      />
    </Content>
  );
};

export default PreviewMe;

import { ContentTitle, PreviewWrapper } from '@/styles/common';

import Content from '@/components/Content';
import Subtitle from '@/components/Subtitle';

interface PreviewProps {
  title: string;
}
const PreviewVideo = ({ title }: PreviewProps) => {
  const video = `/images/nag/${title}`;
  return (
    <video autoPlay muted loop playsInline preload='none' width='70%'>
      <source src={`${video}.webm`} />
      <source src={`${video}.mp4`} />
    </video>
  );
};

const Preview = () => {
  return (
    <Content>
      <ContentTitle>Preview</ContentTitle>
      <PreviewWrapper>
        <Subtitle>랜딩 페이지</Subtitle>
        <PreviewVideo title='landing' />
        <Subtitle>카드 애니메이션</Subtitle>
        <PreviewVideo title='home-card' />
        <Subtitle>카테고리 페이지</Subtitle>
        <PreviewVideo title='category' />
        <Subtitle>카드 생성 및 모달</Subtitle>
        <PreviewVideo title='create-card' />
        <Subtitle>피드 무한 스크롤</Subtitle>
        <PreviewVideo title='feeds' />
        <Subtitle>피드 해시태그</Subtitle>
        <PreviewVideo title='feeds-hashtag' />
      </PreviewWrapper>
    </Content>
  );
};

export default Preview;

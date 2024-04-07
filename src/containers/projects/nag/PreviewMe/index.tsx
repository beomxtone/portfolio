import { styled } from '@mui/material/styles';

import { ContentTitle } from '@/styles/common';

import Content from '@/components/Content';
import Subtitle from '@/components/Subtitle';

const PreviewWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

interface PreviewProps {
  title: string;
}
const Preview = ({ title }: PreviewProps) => {
  return (
    <video
      src={`/images/nag/${title}.mp4`}
      autoPlay
      muted
      loop
      playsInline
      preload='none'
      width='70%'
    />
  );
};

const PreviewMe = () => {
  return (
    <Content>
      <ContentTitle>Preview</ContentTitle>
      <PreviewWrapper>
        <Subtitle>랜딩 페이지</Subtitle>
        <Preview title='landing' />
        <Subtitle>카드 애니메이션</Subtitle>
        <Preview title='home-card' />
        <Subtitle>카테고리 페이지</Subtitle>
        <Preview title='category' />
        <Subtitle>카드 생성 및 모달</Subtitle>
        <Preview title='create-card' />
        <Subtitle>피드 무한 스크롤</Subtitle>
        <Preview title='feeds' />
        <Subtitle>피드 해시태그</Subtitle>
        <Preview title='feeds-hashtag' />
      </PreviewWrapper>
    </Content>
  );
};

export default PreviewMe;

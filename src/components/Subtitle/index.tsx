import { styled } from '@mui/material/styles';

import Bold from '@/components/Bold';

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

export default Subtitle;

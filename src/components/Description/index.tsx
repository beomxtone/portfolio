import Link from 'next/link';
import { styled, useTheme } from '@mui/material/styles';

import { ContentTitle } from '@/styles/common';

import Content from '@/components/Content';
import Sentence from '@/components/Description/Sentence';
import Bold from '@/components/Bold';

interface descriptionProps {
  children?: React.ReactNode;
  title?: string;
  summary?: string;
  period?: string;
  position?: string;
  skills?: string;
  profit?: string;
  link?: string;
  github?: string;
}

const Description = ({
  children,
  title,
  summary,
  period,
  position,
  skills,
  profit,
  link,
  github,
}: descriptionProps) => {
  const UrlLink = styled(Link)({
    color: `${useTheme().palette.mode === 'dark' ? 'white' : 'black'}`,
  });

  return (
    <Content>
      <ContentTitle>{title}</ContentTitle>
      {summary && (
        <Sentence>
          <Bold>요약</Bold> <br />
          {summary}
        </Sentence>
      )}
      {period && (
        <Sentence isLineBreak>
          <Bold>기간</Bold> <br />
          {period}
        </Sentence>
      )}
      {position && (
        <Sentence isLineBreak>
          <Bold>역할</Bold> <br />
          {position}
        </Sentence>
      )}
      {skills && (
        <Sentence isLineBreak>
          <Bold>기술 스택</Bold> <br />
          {skills}
        </Sentence>
      )}
      {profit && (
        <Sentence isLineBreak>
          <Bold>성과</Bold> <br />
          {profit}
        </Sentence>
      )}
      {link && (
        <Sentence isLineBreak>
          <Bold>Link</Bold> <br />
          <UrlLink href={link}>{link}</UrlLink>
        </Sentence>
      )}
      {github && (
        <Sentence isLineBreak>
          <Bold>Github</Bold> <br />
          <UrlLink href={github}>{github}</UrlLink>
        </Sentence>
      )}
      {children}
    </Content>
  );
};

export default Description;

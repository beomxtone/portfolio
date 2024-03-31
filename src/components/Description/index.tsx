import Link from 'next/link';

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
          <Link href={link}>{link}</Link>
        </Sentence>
      )}
      {github && (
        <Sentence isLineBreak>
          <Bold>Github</Bold> <br />
          <Link href={github}>{github}</Link>
        </Sentence>
      )}
      {children}
    </Content>
  );
};

export default Description;

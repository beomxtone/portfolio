import { ContentTitle } from '@/styles/common';

import Content from '@/components/Content';

interface descriptionProps {
  children: React.ReactNode;
  title?: string;
}

const Description = ({ children, title }: descriptionProps) => {
  return (
    <Content>
      <ContentTitle>{title}</ContentTitle>
      {children}
    </Content>
  );
};

export default Description;

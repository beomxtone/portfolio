'use client';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Text = styled(Typography)({
  wordBreak: 'keep-all',
});

const TextWordBreak = styled(Text)({
  marginTop: 16,
});

interface SentenceProps {
  children: React.ReactNode;
  isLineBreak?: boolean;
}

const Sentence = ({ children, isLineBreak }: SentenceProps) => {
  return isLineBreak ? (
    <TextWordBreak>{children}</TextWordBreak>
  ) : (
    <Text>{children}</Text>
  );
};

export default Sentence;

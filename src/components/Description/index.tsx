import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const DescriptionWrapper = styled('div')({
  width: '100%',
  maxWidth: '500px',
  margin: '0 auto',
  padding: '5vh 2vh',
  '& > div': {
    margin: '5% 0',
    fontSize: '3vh',
    lineHeight: 1.6,
  },
  overflow: 'hidden',
});

interface descriptionProps {
  children: React.ReactNode;
  title?: string;
}

const Description = ({ children, title }: descriptionProps) => {
  return (
    <DescriptionWrapper>
      <>
        <Typography
          sx={{ mb: '2vh' }}
          color='text.secondary'
          fontWeight={500}
          fontSize='2.5vh'
        >
          {title}
        </Typography>
        {children}
      </>
    </DescriptionWrapper>
  );
};

export default Description;

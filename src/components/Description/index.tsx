import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

const SubTitle = styled(Typography)({
  marginBottom: '2vh',
  color: 'text.secondary',
  fontWeight: 600,
  fontSize: 20,
});

interface descriptionProps {
  children: React.ReactNode;
  title?: string;
}

const Description = ({ children, title }: descriptionProps) => {
  const theme = useTheme();
  const backColor =
    theme.palette.mode === 'dark'
      ? 'rgba(0, 0, 0, 0.4)'
      : 'rgba(255, 255, 255, 0.4)';

  return (
    <DescriptionWrapper>
      <Box
        sx={{
          backgroundColor: backColor,
          borderRadius: 4,
          padding: 4,
        }}
      >
        <SubTitle>{title}</SubTitle>
        {children}
      </Box>
    </DescriptionWrapper>
  );
};

export default Description;

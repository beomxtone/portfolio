import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const ContentWrapper = styled('div')({
  width: '100%',
  maxWidth: '500px',
  margin: '0 auto',
  padding: '2vh',
  overflow: 'hidden',
});

export const ContentTitle = styled(Typography)({
  marginBottom: '2vh',
  color: 'text.secondary',
  fontWeight: 600,
  fontSize: 20,
});

export const PreviewWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

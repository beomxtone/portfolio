'use client';

import Image from 'next/image';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CoverImageWrapper = styled('div')({
  marginTop: 'calc(10vh - 32px)',
  marginBottom: '20vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const MobileImageWrapper = styled('div')({
  position: 'relative',
  width: '85%',
  maxWidth: '500px',
  aspectRatio: '1/1',
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
});

interface CoverImageProps {
  imageSrc: string;
  title: string;
  subTitle: string;
}

const MobileCoverImage = ({ imageSrc, title, subTitle }: CoverImageProps) => {
  const theme = useTheme();
  const subTitleColor =
    theme.palette.mode === 'dark' ? 'text.secondary' : 'rgba(0, 0, 0, 0.36)';

  return (
    <CoverImageWrapper>
      <MobileImageWrapper>
        <Image
          src={imageSrc}
          alt={imageSrc}
          fill
          style={{ borderRadius: 24 }}
          priority
        />
      </MobileImageWrapper>
      <Box sx={{ ml: 1.5, mt: '5vw', width: '85%', maxWidth: '500px' }}>
        <Typography noWrap fontWeight={600} fontSize='3vh'>
          {title}
        </Typography>
        <Typography color={subTitleColor} fontWeight={600} fontSize='2vh'>
          {subTitle}
        </Typography>
      </Box>
    </CoverImageWrapper>
  );
};

export default MobileCoverImage;

'use client';

import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CoverImageWrapper = styled('div')({
  width: '100%',
  height: '70%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.08)',
});

const MobileImageWrapper = styled('div')({
  position: 'relative',
  width: '80%',
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
  return (
    <CoverImageWrapper>
      <MobileImageWrapper>
        <Image
          src={imageSrc}
          alt={imageSrc}
          fill
          style={{ borderRadius: 24 }}
        />
      </MobileImageWrapper>
      <Box sx={{ ml: 1.5, mt: 5, width: '80%', maxWidth: '500px' }}>
        <Typography noWrap fontWeight={600} fontSize='3vh'>
          {title}
        </Typography>
        <Typography color='text.secondary' fontWeight={500} fontSize='2vh'>
          {subTitle}
        </Typography>
      </Box>
    </CoverImageWrapper>
  );
};

export default MobileCoverImage;

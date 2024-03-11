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

const DesktopImageWrapper = styled('div')({
  position: 'relative',
  marginTop: '10vh',
  width: '50vh',
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

const DesktopCoverImage = ({ imageSrc, title, subTitle }: CoverImageProps) => {
  return (
    <CoverImageWrapper>
      <DesktopImageWrapper>
        <Image
          src={imageSrc}
          alt={imageSrc}
          fill
          style={{ borderRadius: 24 }}
        />
      </DesktopImageWrapper>
      <Box sx={{ ml: 1.5, mt: 5, width: '50vh', maxWidth: '500px' }}>
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

export default DesktopCoverImage;

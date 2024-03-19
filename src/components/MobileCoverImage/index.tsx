'use client';

import Image from 'next/image';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRecoilValue } from 'recoil';

import { isScrollState } from '@/states/coverImage';

const CoverImageWrapper = styled('div')({
  marginTop: '10vh',
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

const Blanks = styled('div')({
  height: 200,
});

interface CoverImageProps {
  imageSrc: string;
  title: string;
  subTitle: string;
}

const MobileCoverImage = ({ imageSrc, title, subTitle }: CoverImageProps) => {
  const theme = useTheme();
  const isScroll = useRecoilValue(isScrollState);
  const subTitleColor =
    theme.palette.mode === 'dark' ? 'text.secondary' : 'rgba(0, 0, 0, 0.36)';

  if (isScroll) return <Blanks />;

  return (
    <CoverImageWrapper>
      <MobileImageWrapper>
        <Image
          src={imageSrc}
          alt={imageSrc}
          sizes='100vw'
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

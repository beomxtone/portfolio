'use client';

import Image from 'next/image';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRecoilValue } from 'recoil';
import Link from 'next/link';

import { isScrollState } from '@/states/coverImage';
import { ShowOpacity } from '@/styles/keyframes';
import { coverImageData } from '@/types/coverImage';

const CoverImageWrapper = styled('div')({
  marginTop: '10vh',
  marginBottom: '20vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  animation: `${ShowOpacity} 600ms cubic-bezier(0.4, 0, 0.07, 1) 1`,
});

const DesktopImageWrapper = styled('div')({
  position: 'relative',
  width: '50vh',
  maxWidth: '500px',
  aspectRatio: '1/1',
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
});

const Blanks = styled('div')({
  height: 240,
});

interface CoverImageProps {
  props: coverImageData;
}

const DesktopCoverImage = ({ props }: CoverImageProps) => {
  const theme = useTheme();
  const isScroll = useRecoilValue(isScrollState);
  const subtitleColor =
    theme.palette.mode === 'dark' ? 'text.secondary' : 'rgba(0, 0, 0, 0.36)';

  const CoverImage = (
    <Image
      src={props.imageSrc}
      alt={props.imageSrc}
      sizes='100%'
      fill
      style={{ borderRadius: 24, border: '1px solid rgba(0, 0, 0, 0.05)' }}
      priority
    />
  );

  if (isScroll) return <Blanks />;

  return (
    <CoverImageWrapper>
      <DesktopImageWrapper>
        {props.link ? <Link href={props.link}>{CoverImage}</Link> : CoverImage}
      </DesktopImageWrapper>
      <Box sx={{ ml: 1.5, mt: '5vh', width: '50vh', maxWidth: '500px' }}>
        <Typography noWrap fontWeight={600} fontSize='3vh'>
          {props.title}
        </Typography>
        <Typography color={subtitleColor} fontWeight={600} fontSize='2vh'>
          {props.subtitle}
        </Typography>
      </Box>
    </CoverImageWrapper>
  );
};

export default DesktopCoverImage;

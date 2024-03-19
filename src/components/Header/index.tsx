import { useRecoilValue } from 'recoil';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';

import { isScrollState } from '@/states/coverImage';

const HeaderAlign = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const HeaderWrapper = styled('header')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'fixed',
  height: 100,
  width: '100vw',
  maxWidth: 560,
  gap: 16,
  padding: 16,
  backdropFilter: 'blur(10px)',
  zIndex: 1000,
  borderRadius: '0 0 24px 24px',
});

const HeaderImage = styled('div')({
  position: 'relative',
  width: 64,
  height: 64,
  aspectRatio: '1/1',
  borderRadius: 4,
  overflow: 'hidden',
});

const HeaderTitle = styled('div')({
  flexDirection: 'column',
});

interface HeaderProps {
  imageSrc: string;
  title: string;
  subTitle: string;
}

const Header = ({ imageSrc, title, subTitle }: HeaderProps) => {
  const theme = useTheme();
  const isScroll = useRecoilValue(isScrollState);
  const subTitleColor =
    theme.palette.mode === 'dark' ? 'text.secondary' : 'rgba(0, 0, 0, 0.36)';

  if (isScroll) {
    return (
      <HeaderAlign>
        <HeaderWrapper
          sx={{
            backgroundColor:
              theme.palette.mode === 'dark'
                ? 'rgba(0, 0, 0, 0.15)'
                : 'rgba(255, 255, 255, 0.15)',
          }}
        >
          <HeaderImage>
            <Image
              src={imageSrc}
              alt={imageSrc}
              sizes='100vw'
              fill
              style={{ borderRadius: 1 }}
              priority
            />
          </HeaderImage>
          <HeaderTitle>
            <Typography noWrap fontWeight={600} fontSize='2.5vh'>
              {title}
            </Typography>
            <Typography color={subTitleColor} fontWeight={600} fontSize='1.8vh'>
              {subTitle}
            </Typography>
          </HeaderTitle>
        </HeaderWrapper>
      </HeaderAlign>
    );
  }

  return null;
};

export default Header;

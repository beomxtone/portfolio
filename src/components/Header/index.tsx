import { useRecoilValue } from 'recoil';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import Link from 'next/link';

import { isScrollState } from '@/states/coverImage';
import { DownFromTop } from '@/styles/keyframes';
import { IconGithub, IconGithubLight } from '#/svgs';
import { headerData } from '@/types/header';

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
  padding: 24,
  backdropFilter: 'blur(10px)',
  zIndex: 1000,
  borderRadius: '0 0 24px 24px',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  animation: `${DownFromTop} 1s cubic-bezier(0.4, 0, 0.07, 1) 1`,
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

const IconWrapper = styled(Link)({
  marginLeft: 'auto',
});

interface HeaderProps {
  props: headerData;
}

const Header = ({ props }: HeaderProps) => {
  const theme = useTheme();
  const isScroll = useRecoilValue(isScrollState);
  const subTitleColor =
    theme.palette.mode === 'dark' ? 'text.secondary' : 'rgba(0, 0, 0, 0.36)';

  const CoverImage = (
    <Image
      src={props.imageSrc}
      alt={props.title}
      sizes='100%'
      fill
      style={{ borderRadius: 1 }}
      priority
    />
  );

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
            {props.link ? (
              <Link href={props.link}>{CoverImage}</Link>
            ) : (
              CoverImage
            )}
          </HeaderImage>
          <HeaderTitle>
            <Typography noWrap fontWeight={600} fontSize='2.5vh'>
              {props.title}
            </Typography>
            <Typography color={subTitleColor} fontWeight={600} fontSize='1.8vh'>
              {props.subtitle}
            </Typography>
          </HeaderTitle>
          {props.github && (
            <IconWrapper href={props.github}>
              {theme.palette.mode === 'light' ? (
                <IconGithub width={32} height={32} />
              ) : (
                <IconGithubLight width={32} height={32} />
              )}
            </IconWrapper>
          )}
        </HeaderWrapper>
      </HeaderAlign>
    );
  }

  return null;
};

export default Header;

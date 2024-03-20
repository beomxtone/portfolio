import { useRecoilValue } from 'recoil';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import Link from 'next/link';

import { isScrollState } from '@/states/coverImage';
import { DownFromTop } from '@/styles/keyframes';
import { IconGithub, IconGithubLight } from '#/svgs';

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
  border: '0.5px solid rgba(0, 0, 0, 0.05)',
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
  imageSrc: string;
  title: string;
  subTitle: string;
  link?: string;
  github?: string;
}

const Header = ({ imageSrc, title, subTitle, link, github }: HeaderProps) => {
  const theme = useTheme();
  const isScroll = useRecoilValue(isScrollState);
  const subTitleColor =
    theme.palette.mode === 'dark' ? 'text.secondary' : 'rgba(0, 0, 0, 0.36)';

  const CoverImage = (
    <Image
      src={imageSrc}
      alt={imageSrc}
      sizes='100vw'
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
            {link ? <Link href={link}>{CoverImage}</Link> : CoverImage}
          </HeaderImage>
          <HeaderTitle>
            <Typography noWrap fontWeight={600} fontSize='2.5vh'>
              {title}
            </Typography>
            <Typography color={subTitleColor} fontWeight={600} fontSize='1.8vh'>
              {subTitle}
            </Typography>
          </HeaderTitle>
          {github && (
            <IconWrapper href={github}>
              {theme.palette.mode === 'light' ? (
                <IconGithub width={36} height={36} />
              ) : (
                <IconGithubLight width={36} height={36} />
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

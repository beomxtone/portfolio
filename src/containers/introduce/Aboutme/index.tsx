import { styled } from '@mui/material/styles';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import Typography from '@mui/material/Typography';

import { ContentTitle } from '@/styles/common';

import Content from '@/components/Content';

const AboutmeWrapper = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
});

const AboutmeItem = styled('div')({
  width: 200,
  marginTop: 24,
  display: 'flex',
  gap: 16,
});

const AboutmeContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const Aboutme = () => {
  const itemTitles: string[] = [
    '이름',
    '생년월일',
    '주소',
    '연락처',
    '이메일',
    '학력',
  ];
  const itemContents: string[] = [
    '서범석',
    '98.05.19',
    '경기도 고양시',
    '010-6811-3696',
    'beomxtone@gmail.com',
    '국민대학교 소프트웨어학과',
  ];
  const iconList: React.ReactNode[] = [
    <PersonRoundedIcon key='person' />,
    <CakeRoundedIcon key='birth' />,
    <LocationOnRoundedIcon key='location' />,
    <LocalPhoneRoundedIcon key='phone' />,
    <EmailRoundedIcon key='email' />,
    <CreateRoundedIcon key='pencil' />,
  ];

  return (
    <Content>
      <ContentTitle>About Me</ContentTitle>
      <AboutmeWrapper>
        {itemTitles.map((title, index) => (
          <AboutmeItem key={title}>
            <div>{iconList[index]}</div>
            <AboutmeContent>
              <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
              <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>
                {itemContents[index]}
              </Typography>
            </AboutmeContent>
          </AboutmeItem>
        ))}
      </AboutmeWrapper>
    </Content>
  );
};

export default Aboutme;

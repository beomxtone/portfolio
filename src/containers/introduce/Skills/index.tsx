import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
  IconNextJs,
  IconReact,
  IconReactQuery,
  IconTypescript,
  IconVanillaExtract,
  IconVue,
  IconZustand,
  IconPlaywright,
  IconJest,
} from '#/svgs';
import { ContentTitle } from '@/styles/common';

import Content from '@/components/Content';

const SkillWrapper = styled('div')({
  width: 80,
  height: 80,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

interface SkillProps {
  skillName: string;
  skillIcon: React.ReactNode;
  themeColor: string;
}

const Skill = ({ skillName, skillIcon, themeColor }: SkillProps) => {
  return (
    <SkillWrapper>
      <Box
        sx={{
          backgroundColor: themeColor,
          width: 48,
          height: 48,
        }}
      >
        {skillIcon}
      </Box>
      <Typography sx={{ fontSize: 14, textAlign: 'center' }}>
        {skillName}
      </Typography>
    </SkillWrapper>
  );
};

const SkillsContainerWrapper = styled('div')({
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  gap: 16,
});

const Skills = () => {
  const theme = useTheme();
  const iconBgColor =
    theme.palette.mode === 'light'
      ? 'rgba(255, 255, 255, 0.3)'
      : 'rgba(128, 128, 128, 0.1)';
  const nameList = [
    'Typescript',
    'React',
    'Next.js',
    'Vue.js',
    'Zustand',
    'Vanilla Extract',
    'Tanstack Query',
    'Jest',
    'Playwright',
  ];
  const iconList: React.ReactNode[] = [
    <IconTypescript width={48} height={48} key='ts' />,
    <IconReact width={48} height={48} key='react' />,
    <IconNextJs width={48} height={48} key='next' />,
    <IconVue width={48} height={48} key='vue' />,
    <IconZustand width={48} height={48} key='zustand' />,
    <IconVanillaExtract width={48} height={48} key='ve' />,
    <IconReactQuery width={48} height={48} key='query' />,
    <IconJest width={48} height={48} key='jest' />,
    <IconPlaywright width={48} height={48} key='playwright' />,
  ];

  return (
    <Content>
      <ContentTitle>Skills</ContentTitle>
      <SkillsContainerWrapper>
        {nameList.map((skill, index) => (
          <Skill
            skillName={skill}
            skillIcon={iconList[index]}
            themeColor={iconBgColor}
            key={skill}
          />
        ))}
      </SkillsContainerWrapper>
    </Content>
  );
};

export default Skills;

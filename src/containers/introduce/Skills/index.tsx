import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
  IconJavascript,
  IconNextJs,
  IconPython,
  IconReact,
  IconRecoil,
  IconStyledComponents,
  IconTypescript,
  IconVanillaExtract,
  IconVue,
  IconVuex,
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
    'Javascript',
    'Typescript',
    'Python',
    'React',
    'Next.js',
    'Vue.js',
    'Recoil',
    'Vuex',
    'Styled Components',
    'Vanilla Extract',
  ];
  const iconList: React.ReactNode[] = [
    <IconJavascript width={48} height={48} key='js' />,
    <IconTypescript width={48} height={48} key='ts' />,
    <IconPython width={48} height={48} key='py' />,
    <IconReact width={48} height={48} key='react' />,
    <IconNextJs width={48} height={48} key='next' />,
    <IconVue width={48} height={48} key='vue' />,
    <IconRecoil width={48} height={48} key='recoil' />,
    <IconVuex width={48} height={48} key='vuex' />,
    <IconStyledComponents width={48} height={48} key='styled' />,
    <IconVanillaExtract width={48} height={48} key='ve' />,
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

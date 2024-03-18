import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';

const ProjectWrapper = styled('div')({
  marginTop: 32,
});

const SkillsWrapper = styled('div')({
  marginTop: 8,
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

const Skill = styled('div')({
  backgroundColor: 'lightgrey',
  padding: '2px 4px',
  borderRadius: 4,
  fontSize: 12,
});

interface ProjectInterface {
  title: string;
  period: string;
  skills: string[];
  comments: string[];
  summary?: string;
}

const Project = ({
  title,
  period,
  skills,
  comments,
  summary,
}: ProjectInterface) => {
  return (
    <ProjectWrapper>
      <Typography sx={{ fontWeight: 700 }}>▎{title}</Typography>
      {summary && (
        <Typography sx={{ fontSize: 12, ml: 2 }}>{summary}</Typography>
      )}
      <Typography sx={{ fontSize: 12, ml: 2, color: 'text.secondary' }}>
        {period}
      </Typography>
      {skills && (
        <SkillsWrapper>
          <BuildRoundedIcon sx={{ fontSize: 'small' }} />
          {skills.map((skill) => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </SkillsWrapper>
      )}
    </ProjectWrapper>
  );
};

export default Project;

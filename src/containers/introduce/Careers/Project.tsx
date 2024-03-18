import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import Link from 'next/link';

import { IconGithub, IconGithubLight } from '#/svgs';

const ProjectWrapper = styled('div')({
  marginTop: 32,
});

const TitleWrapper = styled('div')({
  display: 'flex',
  gap: 8,
});

const IconWrapper = styled(Link)({
  display: 'flex',
  alignItems: 'center',
});

const SkillsWrapper = styled('div')({
  marginTop: 8,
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

const Skill = styled('div')({
  backgroundColor: 'rgba(128, 128, 128, 0.2)',
  padding: '2px 4px',
  borderRadius: 4,
  fontSize: 12,
});

const CommentWrapper = styled('div')({
  'li:before': {
    content: '"- "',
  },
  marginTop: 16,
  marginLeft: 24,
});

const Comment = styled('li')({
  margin: '4px 0',
  fontSize: 14,
  listStyleType: 'none',
  textIndent: -7,
  wordBreak: 'keep-all',
});

interface ProjectInterface {
  title: string;
  period: string;
  skills: string[];
  comments?: string[];
  link?: string;
  summary?: string;
}

const Project = ({
  title,
  period,
  skills,
  comments,
  link,
  summary,
}: ProjectInterface) => {
  const theme = useTheme();

  return (
    <ProjectWrapper>
      <TitleWrapper>
        <Typography sx={{ fontWeight: 700 }}>▎{title}</Typography>
        {link && (
          <IconWrapper href={link}>
            {theme.palette.mode === 'light' ? (
              <IconGithub width={24} height={24} />
            ) : (
              <IconGithubLight width={24} height={24} />
            )}
          </IconWrapper>
        )}
      </TitleWrapper>
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
      {comments && (
        <CommentWrapper>
          {comments.map((comment) => (
            <Comment key={comment}>{comment}</Comment>
          ))}
        </CommentWrapper>
      )}
    </ProjectWrapper>
  );
};

export default Project;

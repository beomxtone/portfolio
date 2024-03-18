import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

import { ContentTitle } from '@/styles/common';
import Project from '@/containers/introduce/Careers/Project';

import Content from '@/components/Content';
import Bold from '@/components/Bold';

const CompanyList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 80,
});

const CompanyWrapper = styled('div')({
  display: 'flex',
});

const CompanyImage = styled('div')({
  position: 'relative',
  width: 48,
  height: 48,
  marginRight: 16,
  borderRadius: '50%',
  overflow: 'hidden',
});

const SsafyProjects = (
  <>
    <Project
      title='명절 잔소리 영수증'
      summary='가족 세대갈등 해소 플랫폼'
      period='2024.01 ~ 2024.02'
      skills={['Typescript', 'Next 13', 'Vanilla Extract', 'Recoil']}
      link='https://github.com/jansorry/jansorry-fe'
      comments={[
        'Next의 SSR에 대응하기 위해 Vanilla Extract 도입',
        'JWT를 사용해 소셜 로그인 구현',
        '웹 성능 최적화로 Lighthouse 100점을 달성',
        'Intersection Observer와 useRef로 무한스크롤 구현',
        'Dockerfile 작성, 빌드 및 배포 자동화 경험',
      ]}
    />
    <Project
      title='자바스크립트 북스터디'
      summary='모던 자바스크립트 Deep Dive'
      period='2023.08 ~ 2024.02'
      skills={['Javascript']}
      link='https://github.com/deep-dive-to-js/study-js-deep-dive'
    />
  </>
);

const AcrossbProjects = (
  <Project
    title='대시보드 프로젝트'
    summary='매출정보 데이터 시각화 대시보드'
    period='2021.12 ~ 2022.04'
    skills={['Vue.js', 'Nest.js', 'AthenaDB', 'Chart.js']}
    comments={[
      '풀스택 개발 담당',
      '10초의 긴 로딩 시간을 3초 안쪽으로 개선',
      'Jest를 사용한 TDD 및 코드리뷰 경험',
    ]}
  />
);

interface CompanyInfoProps {
  period: string;
  imageInfo: string;
  companyName: string;
  summary: string;
  position?: string;
  projects?: React.ReactNode;
}

const CompanyInfo = ({
  period,
  imageInfo,
  companyName,
  summary,
  position,
  projects,
}: CompanyInfoProps) => {
  return (
    <div>
      <CompanyWrapper>
        <CompanyImage>
          <Image
            src={`/images/introduce/${imageInfo}.png`}
            alt={imageInfo}
            fill
          />
        </CompanyImage>
        <div>
          <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
            {companyName}
          </Typography>
          <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
            {period}
          </Typography>
          <Typography sx={{ fontSize: 14, mt: 1 }}>{summary}</Typography>
          {position && (
            <Typography sx={{ fontSize: 14 }}>
              <Bold>포지션 :</Bold> {position}
            </Typography>
          )}
        </div>
      </CompanyWrapper>
      {projects}
    </div>
  );
};

const Index = () => {
  return (
    <Content>
      <ContentTitle>Careers</ContentTitle>
      <CompanyList>
        <CompanyInfo
          period='2023.07 ~ 현재'
          imageInfo='ssafy'
          companyName='삼성 청년 SW 아카데미'
          summary='Java 기반 웹/알고리즘 교육과정'
          projects={SsafyProjects}
        />

        <CompanyInfo
          period='2021.12 ~ 2022.07'
          imageInfo='acrossb'
          companyName='어크로스비'
          summary='글로벌 이커머스 물류 플랫폼'
          position='풀스택 개발자'
          projects={AcrossbProjects}
        />

        <CompanyInfo
          period='2021.06 ~ 2021.08'
          imageInfo='brightn'
          companyName='Brightn'
          summary='콘텐츠 제작 및 협업 관리 플랫폼'
          position='프론트엔드 인턴'
        />

        <CompanyInfo
          period='2020.12 ~ 2021.02'
          imageInfo='musetown'
          companyName='Musetown'
          summary='인플루언서 마케팅 자동화 플랫폼'
          position='웹 개발 인턴'
        />
      </CompanyList>
    </Content>
  );
};

export default Index;

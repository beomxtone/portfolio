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
  gap: 32,
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
  <Project
    title='명절 잔소리 영수증'
    summary='가족 세대갈등 해소 플랫폼'
    period='2024.01 ~ 2024.02'
    skills={['Typescript', 'Next 13', 'Vanilla Extract', 'Recoil']}
    comments={[]}
  />
);

const AcrossbProjects = (
  <Project
    title='대시보드 프로젝트'
    summary='매출정보 데이터 시각화 대시보드'
    period='2021.12 ~ 2022.04'
    skills={['Vue.js', 'Nest.js', 'AthenaDB', 'Chart.js']}
    comments={[]}
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

// src/pages/Services.jsx
import React from 'react';
import { Box, Heading, Text, VStack, Divider } from '@chakra-ui/react';

function Services() {
  return (
    <Box maxW="1200px" mx="auto" py={10} px={4}>
      <Heading size="lg" mb={6}>
        서비스 (Services)
      </Heading>

      {/* 1. 교육 프로그램 */}
      <VStack align="start" spacing={2} mb={8}>
        <Heading size="md">[교육 프로그램]</Heading>
        <Text>
          - 기초·중급·고급 세분화: 컴퓨터 기본, 노션/원노트 협업 도구, 생성형 AI(ChatGPT 등) 활용
        </Text>
        <Text>
          - Google Workspace (Gmail, Drive, Docs/Sheets, Calendar 등) 계정 동기화 & 설정
        </Text>
        <Text>
          - Notion, Evernote, OneNote로 디지털 노트 및 데이터 관리
        </Text>
        <Text>
          - 생성형 AI 이해 & 활용 (ChatGPT, Claude 등) / GPT 기반 이미지·영상·데이터 처리
        </Text>
        <Text>
          - 워크샵·OJT 형태의 실습 프로젝트 진행
        </Text>
      </VStack>
      <Divider />

      {/* 2. 컨설팅 서비스 */}
      <VStack align="start" spacing={2} my={8}>
        <Heading size="md">[컨설팅 서비스]</Heading>
        <Text>
          - 스마트워크 도입 & 교육 컨설팅: 기업 맞춤형 스마트워크 설계, AI 태생계 이해 & 업무 프로세스 개선  
          - 신입 직원 OJT 프로그램: 산업단지 내 기업 맞춤형 실무 교육 & 역량 강화  
          - AI를 통한 영상·이미지 콘텐츠 제작 컨설팅: Runway Gen-3, ElevenLabs 등 도구 활용  
          - 기업문화 정착 지원: AI + 스마트워크 조합으로 창의적인 업무문화 정착
        </Text>
      </VStack>
      <Divider />

      {/* 3. 스마트워크 플랫폼 */}
      <VStack align="start" spacing={2} my={8}>
        <Heading size="md">[스마트워크 플랫폼]</Heading>
        <Text>
          중소기업·스타트업이 최신 업무자동화 솔루션으로 효율성과 생산성을  
          극대화하도록 돕는 혁신적 비즈니스 허브.
        </Text>
        <Text>
          - 솔루션 연결 허브: 다양한 전문 기업과 중소기업을 연결  
          - 맞춤형 서비스: 기업별 니즈 분석 후 최적 솔루션 추천  
          - 사용 편의성: 쉬운 인터페이스로 임직원 누구나 활용
        </Text>
        <Text>
          - 정기 세미나·워크숍 운영, 구독 서비스·수익 공유 모델로 지속 가능 비즈니스 생태계 구축
        </Text>
      </VStack>
      <Divider />

      {/* 4. 강사 풀(POOL) */}
      <VStack align="start" spacing={2} mt={8}>
        <Heading size="md">[강사 풀(POOL) 구축]</Heading>
        <Text>
          - 분야별 전문 강사(정책 과제, 콘텐츠 제작, 마케팅 등) 양성·보유  
          - 강사 양성 프로그램 운영 (교육·멘토링)  
          - 기업 맞춤 강사 파견: 원하는 분야·지역·일정에 맞춰 의뢰 가능
        </Text>
      </VStack>
    </Box>
  );
}

export default Services;
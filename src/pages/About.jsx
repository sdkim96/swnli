// src/pages/About.jsx
import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

function About() {
  return (
    <Box maxW="1200px" mx="auto" py={10} px={4}>
      <Heading size="lg" mb={6}>
        회사 소개
      </Heading>

      {/* 설립 배경 */}
      <VStack spacing={4} align="start" mb={8}>
        <Heading size="md">회사 연혁 & 설립 배경</Heading>
        <Text>회사명: (주)스마트워크앤라이프이노베이션</Text>
        <Text>대표이사: 정미영</Text>
        <Text>설립일: 2024년 12월 26일</Text>
        <Text>
          설립 배경: 스마트워크와 생성형 AI를 결합하여 기업의 업무 혁신과 경쟁력 제고,  
          나아가 워라벨과 생산성 향상을 통해 기업과 직원 모두에게 긍정적 변화를  
          제공하고자 설립.
        </Text>
      </VStack>

      {/* 비전/미션 */}
      <VStack spacing={4} align="start">
        <Heading size="md">비전과 미션</Heading>
        <Text>
          비전: “Changing Your Life”라는 캐치프레이즈 아래 스마트워크를 통해 업무 생산성을  
          높이고, 직장과 일상생활에서 워라벨을 실현하여 삶의 질과 기업 경쟁력을 향상.
        </Text>
        <Text>
          미션: 스마트워크와 생성형 AI의 결합을 통해 스타트업과 중소기업의 업무 효율성 증대 및  
          경쟁력 강화를 지원. 직원 교육 및 워크샵을 통해 다역량 인재 양성 및 AI/스마트워크  
          기업문화 정착을 추구.
        </Text>
      </VStack>
    </Box>
  );
}

export default About;
// src/pages/CaseStudies.jsx
import React from 'react';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';

function CaseStudies() {
  return (
    <Box maxW="1200px" mx="auto" py={10} px={4}>
      <Heading size="lg" mb={6}>
        성과 및 사례 (Case Studies)
      </Heading>
      <Text mb={8}>
        스마트워크·AI 도입, 교육, 컨설팅 등을 통해 실제로 업무 효율 향상과 생산성 증대를
        이룬 기업들의 사례를 소개합니다.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <Box bg="gray.50" p={4} borderRadius="md">
          <Heading size="md" mb={2}>
            사례 A
          </Heading>
          <Text fontSize="sm">
            중소기업 A: 스마트워크 교육(중급+고급) 후 보고서 작성 시간이 30% 단축, 
            팀 협업 효율이 눈에 띄게 향상됨.
          </Text>
        </Box>
        <Box bg="gray.50" p={4} borderRadius="md">
          <Heading size="md" mb={2}>
            사례 B
          </Heading>
          <Text fontSize="sm">
            스타트업 B: 생성형 AI(ChatGPT, Runway) 활용으로 프로토타입 콘텐츠 제작 비용 40% 절감.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default CaseStudies;
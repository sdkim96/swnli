// src/pages/News.jsx
import React from 'react';
import { Box, Heading, Text, Divider } from '@chakra-ui/react';

function News() {
  return (
    <Box maxW="1200px" mx="auto" py={10} px={4}>
      <Heading size="lg" mb={6}>
        소식 & 자료실 (News & Resources)
      </Heading>

      <Box mb={6}>
        <Heading size="md">[뉴스/공지사항]</Heading>
        <Text mt={2}>- [2025-01-01] 신규 교육 프로그램 모집 공고</Text>
        <Text>- [2025-03-10] 정부지원사업 컨소시엄 협약 체결</Text>
      </Box>
      <Divider />

      <Box mt={6}>
        <Heading size="md">[자료실]</Heading>
        <Text mt={2}>- 스마트워크/AI 활용 백서 (PDF)</Text>
        <Text>- 업무 자동화 가이드 (PPT)</Text>
      </Box>
    </Box>
  );
}

export default News;
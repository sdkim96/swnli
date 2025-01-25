// src/pages/Contact.jsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
} from '@chakra-ui/react';

function Contact() {
  return (
    <Box maxW="1200px" mx="auto" py={10} px={4}>
      <Heading size="lg" mb={6}>
        문의 & 참여 안내
      </Heading>

      {/* 회사/연락처 안내 (명함 정보) */}
      <VStack align="start" spacing={2} mb={10}>
        <Text>대표이사: 정미영</Text>
        <Text>E : chongmiyoung@swnli.kr</Text>
        <Text>M : 010-8401-2246</Text>
        <Text>H : https://www.swnli.kr</Text>
        <Text>(04079) 서울시 마포구 토정로 167 서강해모로 APT 105-1103</Text>
      </VStack>

      {/* 문의 폼 예시 */}
      <Box bg="gray.50" p={4} borderRadius="md" mb={10}>
        <Heading size="md" mb={4}>
          온라인 문의하기
        </Heading>
        <FormControl mb={4}>
          <FormLabel>이름</FormLabel>
          <Input placeholder="이름을 입력하세요" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>이메일</FormLabel>
          <Input placeholder="example@example.com" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>문의 내용</FormLabel>
          <Textarea placeholder="문의 내용을 자세히 적어주세요" />
        </FormControl>
        <Button colorScheme="brand">문의 보내기</Button>
      </Box>

      {/* 채용 안내 */}
      <Box>
        <Heading size="md" mb={2}>
          채용 공고 (Recruit)
        </Heading>
        <Text>
          내부 인력 충원 시 인재를 확보하고, 회사 성장에 참여할 분을 모집합니다.  
          지원 분야(예: AI 엔지니어, 스마트워크 컨설턴트, 교육 기획 등)에 맞춰  
          이력서와 포트폴리오를 제출해 주세요.
        </Text>
      </Box>
    </Box>
  );
}

export default Contact;
// src/pages/Home.jsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Home() {
  return (
    <Box as="main">
      {/* 히어로 섹션 */}
      <Box
        bg="brand.500"
        color="white"
        py={{ base: 16, md: 24 }}
        px={{ base: 6, md: 12 }}
        textAlign="center"
      >
        <Heading fontSize={{ base: '2xl', md: '4xl' }} mb={4}>
          “사람들의 삶과 직업을 변화시키는 스마트워크 혁신”
        </Heading>
        <Text fontSize={{ base: 'md', md: 'xl' }} mb={6} maxW="600px" mx="auto">
          “Changing your Life: 당신의 비즈니스와 삶을 변화 시켜 드립니다”
        </Text>
        <Button
          as={RouterLink}
          to="/services"
          colorScheme="blackAlpha"
          size="lg"
        >
          컨설팅 상담 신청
        </Button>
      </Box>

      {/* 주요 서비스 하이라이트 */}
      <Box maxW="1200px" mx="auto" py={10} px={4}>
        <Heading textAlign="center" mb={8}>
          주요 서비스
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          {/* 교육 프로그램 */}
          <Card>
            <CardHeader fontWeight="bold">교육 프로그램</CardHeader>
            <CardBody>
              <Text fontSize="sm">
                (기초·중급·고급) 스마트워크 도구 활용, 생성형 AI 등
                체계적인 교육 커리큘럼.
              </Text>
            </CardBody>
            <CardFooter>
              <Button as={RouterLink} to="/services" variant="link" colorScheme="brand">
                자세히 보기
              </Button>
            </CardFooter>
          </Card>
          {/* 컨설팅 */}
          <Card>
            <CardHeader fontWeight="bold">컨설팅 서비스</CardHeader>
            <CardBody>
              <Text fontSize="sm">
                기업 맞춤형 스마트워크 솔루션 제공. 요구 분석→설계→교육→성과 측정.
              </Text>
            </CardBody>
            <CardFooter>
              <Button as={RouterLink} to="/services" variant="link" colorScheme="brand">
                자세히 보기
              </Button>
            </CardFooter>
          </Card>
          {/* 스마트워크 플랫폼 */}
          <Card>
            <CardHeader fontWeight="bold">스마트워크 플랫폼</CardHeader>
            <CardBody>
              <Text fontSize="sm">
                글로벌 파트너십 기반, 자동화·협업·AI 연계 솔루션을 한곳에.
              </Text>
            </CardBody>
            <CardFooter>
              <Button as={RouterLink} to="/services" variant="link" colorScheme="brand">
                자세히 보기
              </Button>
            </CardFooter>
          </Card>
          {/* 공공 협업 */}
          <Card>
            <CardHeader fontWeight="bold">공공 부문 협업</CardHeader>
            <CardBody>
              <Text fontSize="sm">
                정부지원사업, 초등학교·공공 교육 지원 등 사회적 책임 실현.
              </Text>
            </CardBody>
            <CardFooter>
              <Button as={RouterLink} to="/services" variant="link" colorScheme="brand">
                자세히 보기
              </Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Home;
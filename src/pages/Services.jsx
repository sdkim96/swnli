import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  Spacer,
  Image,
} from '@chakra-ui/react';

const consultingServices = {
  consulting_1: 
    {
      heading: "스마트워크 도입 및 교육",
      body: [
        "기업 맞춤형 시스템 설계 및 초기 도입 지원",
        "직원 교육 및 워크샵 제공"
      ],
      backgroundImage: "service-2.jpg",
      backgroundColor: "#F5F5F7"
    },
  consulting_2:
    {
      title: "AI 및 디지털 혁신 컨설팅",
      body: [
        "생성형 AI 활용을 통한 업무 프로세스 개선",
        "다양한 GPT 도구 및 생성형 AI 솔루션 활용법 제공"
      ],
      backgroundImage: "service-3.jpg",
      backgroundColor: "#F5F5F7"
    },
  consulting_3: 
    {
      title: "신입 직원 OJT 프로그램",
      body: [
        "산업단지 및 중소기업 맞춤형 OJT 프로그램 설계",
        "스마트워크 도구 활용을 중심으로 실질적 업무 역량 강화"
      ],
      backgroundImage: "service-4.jpg",
      backgroundColor: "#F5F5F7"
    },
  consulting_4:
    {
      title: "창작과 혁신 중심 컨설팅",
      body: [
        "AI를 통한 영상 및 이미지 콘텐츠 제작 워크샵",
        "스마트워크와 AI 결합으로 창의적 업무 문화 정착 지원"
      ],
      backgroundImage: "service-5.jpg",
      backgroundColor: "#F5F5F7"
    },
  
};

function Services() {
  return (
    <Box maxW="1200px" mx="auto" py={20} px={4}>

      {/* 1. 교육 서비스 */}
      <Box height='100vh'>
        <Heading size="2xl" mb={20}>
          교육 서비스
        </Heading>
        <Box bg="#F5F5F7" borderRadius="3xl" height="70vh" maxW="100%" p="20" >
          <HStack>
            <Accordion allowToggle mb={8} w='50%'>
              {/* Beginner Section */}
              <AccordionItem>
                <AccordionButton>
                  <Text flex="1" textAlign="left" fontSize="2xl" fontWeight="bold" py={4}>
                    Beginner
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <VStack align="start" spacing={6}>
                    <Text fontSize="xl">
                      디지털 기초 역량이 부족한 초급자 등을 위한 교육.
                    </Text>
                    <Text fontSize="xl">
                      스마트폰 및 컴퓨터 기초 활용 능력 달성목표.
                    </Text>
                    <Text fontSize="xl">
                      이메일 계정 생성 및 관리능력 향상.
                    </Text>
                    <Text fontSize="xl">
                      회사 홍보전략 및 디지털 마케팅 기초.
                    </Text>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>

              {/* Intermediate Section */}
              <AccordionItem>
                <AccordionButton>
                  <Text flex="1" textAlign="left" fontSize="2xl" fontWeight="bold" py={4}>
                    Intermediate
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <VStack align="start" spacing={6}>
                    <Text fontSize="xl">
                      디지털 기초가 이미 어느 정도 있는 학습자.
                    </Text>
                    <Text fontSize="xl">
                      노션, 원노트 등 업무 협업도구 심화 학습.
                    </Text>
                    <Text fontSize="xl">
                      엑셀 및 구글 스프레드시트를 통한 데이터 분석능력 기초.
                    </Text>
                    <Text fontSize="xl">
                      문서 간 연동 및 간단한 자동화 툴 기초.
                    </Text>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>

              {/* Advanced Section */}
              <AccordionItem>
                <AccordionButton>
                  <Text flex="1" textAlign="left" fontSize="2xl" fontWeight="bold" py={4}>
                    Advanced
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <VStack align="start" spacing={6}>
                    <Text fontSize="xl">
                      AI 활용에 관심이 많은 기업 임직원, 경영진, 프로젝트 매니저 등.
                    </Text>
                    <Text fontSize="xl">
                      생성형 AI 이해와 적용 및 업무 활용방안 학습.
                    </Text>
                    <Text fontSize="xl">
                      국내외 AI 프로젝트 성공·실패 사례 리뷰 및 기업 규모별 맞춤 적용 전략.
                    </Text>
                    <Text fontSize="xl">
                      집중 세미나 + 실습을 통한 실제 모델을 적용.
                    </Text>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Spacer />
            <Image 
              src='service-1.png' 
              alt='Green double couch with wooden legs' 
              boxSize="40%" 
              borderRadius='3xl'
            />
          </HStack>
        </Box>  
      </Box>

      {/* 2. 컨설팅 서비스 - 슬라이드 영역 */}
      <Box height='100vh'>
        <Heading size="2xl" mb={20}>
          컨설팅 서비스
        </Heading>
        <Box
          width="100%"
          px={4}
          overflowX="auto"
          whiteSpace="nowrap"
          sx={{
            // 스크롤바 숨기기
            '::-webkit-scrollbar': {
              display: 'none',
            },
            '-ms-overflow-style': 'none',  // IE/Edge
            'scrollbar-width': 'none',     // Firefox
          }}
        >
          <HStack spacing={10} align="start">
            {/* 첫 번째 컨설팅 박스 */}
            <Box
              width="405px"
              height="704px"
              bg={consultingServices.consulting_1.backgroundColor}
              borderRadius="3xl"
              p={10}
              display="inline-block"
              backgroundImage={`url(${consultingServices.consulting_1.backgroundImage})`}
              backgroundSize="cover"
              backgroundPosition="center"
            >
              <Heading size="lg" mb={10} color="white">
                {consultingServices.consulting_1.heading}
              </Heading>
              {consultingServices.consulting_1.body.map((line, idx) => (
                <Text key={idx} mb={2} color="white" fontWeight='bold'>
                  {line}
                </Text>
              ))}
            </Box>

            {/* 두 번째 컨설팅 박스 */}
            <Box
              width="405px"
              height="704px"
              bg={consultingServices.consulting_2.backgroundColor}
              borderRadius="3xl"
              p={10}
              display="inline-block"
              backgroundImage={`url(${consultingServices.consulting_2.backgroundImage})`}
              backgroundSize="cover"
              backgroundPosition="center"
            >
              <Heading size="lg" mb={10} color="black">
                {consultingServices.consulting_2.title}
              </Heading>
              {consultingServices.consulting_2.body.map((line, idx) => (
                <Text key={idx} mb={2} color="black" fontWeight='bold'>
                  {line}
                </Text>
              ))}
            </Box>
            service-5
            {/* 세 번째 컨설팅 박스 */}
            <Box
              width="405px"
              height="704px"
              bg={consultingServices.consulting_3.backgroundColor}
              borderRadius="3xl"
              p={10}
              display="inline-block"
              backgroundImage={`url(${consultingServices.consulting_3.backgroundImage})`}
              backgroundSize="cover"
              backgroundPosition="center"
            >
              <Heading size="lg" mb={10} color="#FEFCBF">
                {consultingServices.consulting_3.title}
              </Heading>
              {consultingServices.consulting_3.body.map((line, idx) => (
                <Text key={idx} mb={2} color="#FEFCBF" fontWeight='bold'>
                  {line}
                </Text>
              ))}
            </Box>

            {/* 네 번째 컨설팅 박스 */}
            <Box
              width="405px"
              height="704px"
              bg={consultingServices.consulting_4.backgroundColor}
              borderRadius="3xl"
              p={10}
              display="inline-block"
              backgroundImage={`url(${consultingServices.consulting_4.backgroundImage})`}
              backgroundSize="cover"
              backgroundPosition="center"
            >
              <Heading size="lg" mb={10} color="white">
                {consultingServices.consulting_4.title}
              </Heading>
              {consultingServices.consulting_4.body.map((line, idx) => (
                <Text key={idx} mb={2} color="white">
                  {line}
                </Text>
              ))}
            </Box>
          </HStack>
        </Box>
      </Box>

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
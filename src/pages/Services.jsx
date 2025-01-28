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
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { MdCheckCircle, MdSettings } from 'react-icons/md';

function Services() {
  return (
    <Box maxW="1200px" mx="auto" py={20} px={4}>
      <Box height='100vh'>
        <Heading size="2xl" mb={20}>
          교육 서비스
        </Heading>
        <Box bg="#F5F5F7" borderRadius="3xl" height="auto" maxW="100%" p="20">
          <HStack spacing={4} mb={8}>
          <Accordion allowToggle mb={8} w='100%'>
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
                  <Text flex="1" textAlign="left" fontSize="xl" fontWeight="bold">
                    디지털 기초 역량이 부족한 초급자 등을 위한 교육.
                  </Text>
                  <Text flex="1" textAlign="left" fontSize="xl" fontWeight="bold">
                    스마트폰 및 컴퓨터 기초 활용 능력 달성목표.
                  </Text>
                  <Text flex="1" textAlign="left" fontSize="xl" fontWeight="bold">
                    이메일 계정 생성 및 관리능력 향상.
                  </Text>
                  <Text flex="1" textAlign="left" fontSize="xl" fontWeight="bold">
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
                  <Text flex="1" textAlign="left" fontSize="xl" fontWeight="bold">
                    디지털 기초가 이미 어느 정도 있는 학습자.
                  </Text>
                  <Text flex="1" textAlign="left" fontSize="xl" fontWeight="bold">
                    노션, 원노트 등 업무 협업도구 심화 학습.
                  </Text>
                  <Text flex="1" textAlign="left" fontSize="xl" fontWeight="bold">
                    엑셀 및 구글 스프레드시트를 통한 데이터 분석능력 기초.
                  </Text>
                  <Text flex="1" textAlign="left" fontSize="xl" fontWeight="bold">
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
                  <Text flex="1" textAlign="left" fontSize="xl" fontWeight="bold">
                    AI 활용에 관심이 많은 기업 임직원, 경영진, 프로젝트 매니저 등.
                  </Text>
                  <Text flex="1" textAlign="left" fontSize="xl" fontWeight="bold">
                    생성형 AI 이해와 적용 및 업무 활용방안 학습.
                  </Text>
                  <Text flex="1" textAlign="left" fontSize="xl" fontWeight="bold">
                  국내외 AI 프로젝트 성공·실패 사례 리뷰 및 기업 규모별(AI 스타트업, 중소·중견, 대기업) 맞춤 적용 전략.
                  </Text>
                  <Text flex="1" textAlign="left" fontSize="xl" fontWeight="bold">
                    집중 세미나 + 실습을 통한 실제 모델을 적용해봄(프롬프트 설계, 응답 최적화 기법 등).
                  </Text>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Spacer />
          <Image src='service-1.png' alt='Green double couch with wooden legs' boxSize="500px" borderRadius='lg'/>
          </HStack>
        </Box>  
      </Box>
      
      {/* 2. 컨설팅 서비스 */}
      <Box height='100vh'>
        <Heading size="2xl" mb={20}>
          컨설팅 서비스
        </Heading>
        <VStack align="start" spacing={2} my={8}>
          <Text>
            - 스마트워크 도입 & 교육 컨설팅: 기업 맞춤형 스마트워크 설계, AI 태생계 이해 & 업무 프로세스 개선  
            - 신입 직원 OJT 프로그램: 산업단지 내 기업 맞춤형 실무 교육 & 역량 강화  
            - AI를 통한 영상·이미지 콘텐츠 제작 컨설팅: Runway Gen-3, ElevenLabs 등 도구 활용  
            - 기업문화 정착 지원: AI + 스마트워크 조합으로 창의적인 업무문화 정착
          </Text>
        </VStack>
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
import React, { useEffect } from 'react';
import { Box, Text, VStack, Container, Flex, useColorModeValue, Icon, Stack, Heading, Divider, ButtonGroup, Image, Spacer, HStack } from '@chakra-ui/react';
import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {CalendarIcon} from '@chakra-ui/icons';

const MotionBox = motion(Box);

const AnimatedSection = ({ children, bg }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      py={16}
      px={4}
      bg={bg}

    >
      <Container maxW="container.xl">{children}</Container>
    </MotionBox>
  );
};

const GradientText = ({ children, fontSize = '5xl', ...props }) => (
  <Text
    fontSize={fontSize}
    fontWeight="extrabold"
    bgGradient="linear(to-r, brand.400, brand.600)" // 테마의 brand 색상 사용
    bgClip="text"
    {...props}
  >
    {children}
  </Text>
);

const AboutPage = () => {
  const bgColor = useColorModeValue('gray.50', 'brand.900'); // 테마의 brand.900 사용
  const textColor = useColorModeValue('gray.800', 'gray.100');

  return (
    <Box bg='white' color={textColor} fontFamily="body"> {/* 테마의 글로벌 폰트 사용 */}
      <VStack spacing={0} align="stretch">
        {/* Hero Section */}
        <Box h="100vh" position="relative" overflow="hidden"> {/* 테마의 brand.50 사용 */}
          <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center">
            <GradientText fontSize="7xl" mb={10}>
              SWNLI
            </GradientText>
            <Text fontSize="2xl">놀랍고도 놀라운 업무혁신의 시작.</Text>
          </Box>
        </Box>

        {/* 설립 배경 Section */}
        <AnimatedSection>
          <Flex direction={{ base: 'column', md: 'row' }} align="center">
            <Box flex={1} h="100vh">
              <Box mb={32}>
                <GradientText mb={10}>업무는 언제 어디서나, 더 효율적으로. 스마트워크와 함께.</GradientText>
              </Box>
              <Flex align="center">
              <Card maxW='sm' borderRadius='20' height='60vh' bg='#DFF6FF'>
                <CardBody>
                  <Image
                    src='everywhere.png'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='xl'>Everywhere</Heading>
                    <Text fontSize='lg'>
                      모든곳에서 업무를 진행하세요.
                    </Text>                    
                  </Stack>
                </CardBody>
              </Card>
              <Spacer />
              <Card maxW='sm' borderRadius='20' height='60vh' bg='brand.50'>
                <CardBody>
                  <Image
                    src='efficiently.png'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='xl'>Efficiently</Heading>
                    <Text fontSize='lg'>
                      더 효율적으로 업무를 진행하세요.
                    </Text>                    
                  </Stack>
                </CardBody>
              </Card>
              <Spacer />
              <Card maxW='sm' borderRadius='20' height='60vh' bg='#F5F5F5'>
                <CardBody>
                  <Image
                    src='besmart.png'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='xl'>Be Smart</Heading>
                    <Text fontSize='lg'>
                      여러 스마트툴을 이용해 업무를 진행하세요.
                    </Text>                    
                  </Stack>
                </CardBody>
              </Card>
              </Flex>
            </Box>
          </Flex>
        </AnimatedSection>

        {/* 비전/미션 Section */}
        <AnimatedSection> {/* 테마의 brand.100 사용 */}
          <Box flex={1} h="100vh">
            <GradientText mb={4}>생성형 AI, 당신의 퇴근시간에 날개를.</GradientText>
            <Box bg="#F5F5F7" borderRadius="3xl" height="60vh" mt="32" maxW='100%'>              
              <Flex justify="center" align="center" height="100%" p='10'>
                <HStack spacing={7}>
                <Image
                  src="openai.svg"
                  alt="OpenAI Logo"
                  boxSize="100px"
                  mx={2}
                />
                <Image
                  src="midjourney.svg"
                  alt="Midjourney Logo"
                  boxSize="100px"
                  mx={2}
                />
                <Image
                  src="perplexity-color.svg"
                  alt="Perplexity Logo"
                  boxSize="100px"
                  mx={2}
                />
                <Image
                  src="claude-color.svg"
                  alt="claude Logo"
                  boxSize="100px"
                  mx={2}
                />
                <Text fontSize='7xl'> + </Text>
                  <Text fontSize='7xl'> 📑 </Text>
                  <Text fontSize='7xl'> = </Text>
                  <Text fontSize='7xl'> ⏰ 🪽</Text>
                </HStack>                
              </Flex>
            </Box>
          </Box>
        </AnimatedSection>
      </VStack>
    </Box>
  );
};

export default AboutPage;
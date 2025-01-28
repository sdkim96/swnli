import React, { useEffect } from 'react';
import { Box, Text, VStack, Container, Flex, useColorModeValue, Button, Stack, Heading, Divider, ButtonGroup, Image, Spacer } from '@chakra-ui/react';
import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    <Box bg={bgColor} color={textColor} fontFamily="body"> {/* 테마의 글로벌 폰트 사용 */}
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
              <Box mb={20}>
                <GradientText mb={10}>업무는 언제 어디서나, 더 효율적으로. 스마트워크와 함께</GradientText>
              </Box>
              <Flex align="center">
              <Card maxW='sm' borderRadius='20'>
                <CardBody>
                  <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque inspired
                      spaces, earthy toned spaces and for people who love a chic design with a
                      sprinkle of vintage design.
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                      $450
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                      Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
              <Spacer />
              <Card maxW='sm' borderRadius='20'>
                <CardBody>
                  <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque inspired
                      spaces, earthy toned spaces and for people who love a chic design with a
                      sprinkle of vintage design.
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                      $450
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                      Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
              <Spacer />
              <Card maxW='sm' borderRadius='20'>
                <CardBody>
                  <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque inspired
                      spaces, earthy toned spaces and for people who love a chic design with a
                      sprinkle of vintage design.
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                      $450
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                      Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
              </Flex>
            </Box>
          </Flex>
        </AnimatedSection>

        {/* 비전/미션 Section */}
        <AnimatedSection> {/* 테마의 brand.100 사용 */}
          <Box flex={1}>
            <GradientText mb={4}>생성형 AI</GradientText>
            <Text fontSize="xl" mb={4}>
              Changing Your Life with AI
            </Text>
          </Box>
        </AnimatedSection>
      </VStack>
    </Box>
  );
};

export default AboutPage;
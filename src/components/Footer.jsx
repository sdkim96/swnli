// src/components/Footer.jsx
import React from 'react';
import { Box, Flex, Heading, Link, Text, Stack } from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" bg="gray.800" color="gray.200" py={10} mt={10}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
      >
        {/* Left */}
        <Box mb={{ base: 6, md: 0 }}>
          <Heading size="md" mb={4} color="white">
            (주)스마트워크앤라이프이노베이션
          </Heading>
          <Text fontSize="sm" maxW="300px">
            “Changing your Life: 당신의 비즈니스와 삶을 변화 시켜 드립니다”
          </Text>
          <Text fontSize="sm" mt={2}>
            (04079) 서울시 마포구 토정로 167 서강해모로 APT 105-1103
          </Text>
        </Box>

        {/* Middle */}
        <Stack spacing={2} mb={{ base: 6, md: 0 }}>
          <Heading size="sm" color="white">
            Contact
          </Heading>
          <Text fontSize="sm">대표이사: 정미영</Text>
          <Text fontSize="sm">E: chongmiyoung@swnli.kr</Text>
          <Text fontSize="sm">M: 010-8401-2246</Text>
          <Link href="https://www.swnli.kr" isExternal fontSize="sm" color="brand.200">
            www.swnli.kr
          </Link>
        </Stack>

        {/* Right */}
        <Stack spacing={2}>
          <Heading size="sm" color="white">
            Connect
          </Heading>
          <Link href="#" fontSize="sm">
            카카오 채널
          </Link>
          <Link href="#" fontSize="sm">
            유튜브
          </Link>
          <Link href="#" fontSize="sm">
            기타 SNS
          </Link>
        </Stack>
      </Flex>

      <Text textAlign="center" mt={8} fontSize="xs" color="gray.500">
        © 2025 SWNLI. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;
// src/components/Navbar.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, HStack, Link, Image, Button } from '@chakra-ui/react';

const LOGO_URL =
  'https://cdn.freebiesupply.com/logos/large/2x/ethereum-1-logo-png-transparent.png'; // 임시

function Navbar() {
  return (
    <Box as="header" bg="white" boxShadow="sm">
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        py={3}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* 로고 + 회사명(임시) */}
        <HStack spacing={3}>
          <Image src={LOGO_URL} alt="SWNLI logo" boxSize="32px" />
          <Link
            as={RouterLink}
            to="/"
            fontWeight="bold"
            fontSize="lg"
            _hover={{ textDecoration: 'none' }}
          >
            (주)스마트워크앤라이프이노베이션
          </Link>
        </HStack>

        {/* 메뉴 */}
        <HStack spacing={4}>
          <Link as={RouterLink} to="/about">
            회사소개
          </Link>
          <Link as={RouterLink} to="/services">
            서비스
          </Link>
          <Link as={RouterLink} to="/case-studies">
            사례
          </Link>
          <Link as={RouterLink} to="/news">
            소식&자료실
          </Link>
          <Link as={RouterLink} to="/contact">
            문의
          </Link>
          <Button colorScheme="brand" size="sm" as={RouterLink} to="/services">
            교육 살펴보기
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
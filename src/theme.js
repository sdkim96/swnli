// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#eef0fc',
      100: '#d4d7f7',
      200: '#b9bef2',
      300: '#9ea6ec',
      400: '#838de7',
      500: '#627EEA', // Ethereum 주요 컬러
      600: '#4c60b8',
      700: '#374486',
      800: '#212755',
      900: '#0b0c23',
    },
  },
  fonts: {
    heading: `'Noto Sans KR', sans-serif`,
    body: `'Noto Sans KR', sans-serif`,
  },
});

export default theme;
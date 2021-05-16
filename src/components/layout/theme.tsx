import {
  ChakraProvider,
  extendTheme,
  theme as baseTheme,
} from '@chakra-ui/react';
import React from 'react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const colors = {
  brand: baseTheme.colors.teal,
  secondary: baseTheme.colors.orange,
};
const fonts = {
  heading:
    'Helvetica Neue, Arial, Hiragino Kaku Gothic ProN, Hiragino Sans, BIZ UDPGothic, Meiryo, sans-serif',
  body:
    'Helvetica Neue, Arial, Hiragino Kaku Gothic ProN, Hiragino Sans, BIZ UDPGothic, Meiryo, sans-serif',
};

const breakpoints = createBreakpoints({
  xs: '768px',
  sm: '992px',
  md: '1020px',
  lg: '1440px',
  xl: '1920px',
});

const theme = extendTheme({
  colors,
  fonts,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  breakpoints,
});
type Prop = {
  children: React.ReactNode;
};

export const Theme: React.VFC<Prop> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

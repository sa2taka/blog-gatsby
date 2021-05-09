import {
  ChakraProvider,
  extendTheme,
  theme as baseTheme,
} from '@chakra-ui/react';
import React from 'react';
const colors = {
  brand: baseTheme.colors.teal,
};
const fonts = {
  heading:
    'Helvetica Neue, Arial, Hiragino Kaku Gothic ProN, Hiragino Sans, BIZ UDPGothic, Meiryo, sans-serif',
  body:
    'Helvetica Neue, Arial, Hiragino Kaku Gothic ProN, Hiragino Sans, BIZ UDPGothic, Meiryo, sans-serif',
};

const theme = extendTheme({
  colors,
  fonts,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
});
type Prop = {
  children: React.ReactNode;
};

export const Theme: React.VFC<Prop> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

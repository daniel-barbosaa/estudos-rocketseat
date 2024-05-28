// src/styles/theme.ts
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      "900": '#181b23',
      "800": '#1f2029',
      "700": '#353646',
      "600": '#4d4b63',
      "500": '#616480',
      "400": '#797d9a',
      "300": '#9699b0',
      "200": '#b3b5c6',
      "100": '#d1d2dc',
      "50": '#eeeef2',
    },
    pink: {
      "50": '#FFF5F7',
      "100": '#FED7E2',
      "200": '#FBB6CE',
      "300": '#F687B3',
      "400": '#ED64A6',
      "500": '#D53F8C',
      "600": '#B83280',
      "700": '#97266D',
      "800": '#702459',
      "900": '#521B41',
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
    },
  },
});

export default theme;

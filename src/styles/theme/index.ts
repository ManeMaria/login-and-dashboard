import { extendTheme } from '@chakra-ui/react';

import { styles } from './chakra-styles';

export default extendTheme({
  styles,
  colors: {
    green: {
      50: '#A4BD8C',
      100: '#75981E',
      200: '#558B2F',
    },
    gray: {
      100: '#C7CCD8',
      200: '#595F6E',
      300: '#4D4F5C',
    },
    white: {
      50: '#FFFFFF',
      100: '#FEFFFC',
      200: ' #F5F5F5',
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

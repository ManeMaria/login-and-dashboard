import { extendTheme } from '@chakra-ui/react';

import { styles } from './chakra-styles';

export default extendTheme({
  styles,
  colors: {
    green: '#558B2F',
    gray: {
      100: '#C7CCD8',
      200: '#595F6E',
      300: '#4D4F5C',
    },
    white: '#FFFFFF',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

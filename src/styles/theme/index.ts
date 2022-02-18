import { extendTheme } from '@chakra-ui/react';

import { styles } from './chakra-styles';

export default extendTheme({
  styles,
  colors: {
    green: '#558B2F',
    gray: {
      100: '#C7CCD8',
      200: '#4D4F5C',
      300: '#595F6E',
    },
    white: '#FFFFFF',
  },
});

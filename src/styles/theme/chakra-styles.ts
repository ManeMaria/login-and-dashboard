import { mode, GlobalStyleProps } from '@chakra-ui/theme-tools';
import '@fontsource/source-sans-pro';
export const styles = {
  global: (props: GlobalStyleProps) => ({
    html: {
      minH: '100%',
    },
    body: {
      fontFamily: 'Source Sans Pro',
      color: mode('gray.800', 'white')(props),
      bg: mode('white', 'gray.800')(props),
      lineHeight: 'base',
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },

    fonts: {
      heading: 'Source Sans Pro',
      body: 'Source Sans Pro',
    },
  }),
};

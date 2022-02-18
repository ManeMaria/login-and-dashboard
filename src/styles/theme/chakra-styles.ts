import { mode, GlobalStyleProps } from '@chakra-ui/theme-tools';

export const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      fontFamily: 'body',
      color: mode('gray.800', 'whiteAlpha.900')(props),
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
      heading: 'Open Sans',
      body: 'Open Sans',
    },
  }),
};

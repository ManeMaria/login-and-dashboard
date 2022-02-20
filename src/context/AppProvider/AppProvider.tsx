import { ChakraProvider, ColorModeScript, Flex } from '@chakra-ui/react';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import DotLoader from 'react-spinners/DotLoader';

import { AuthProvider } from '../global-provider/Global';

import '@fontsource/source-sans-pro';
import 'animate.css';
import { theme } from '@/styles';
import { IChildrenReact } from '@/types/IChildrenReact';

export const AppProvider = ({ children }: IChildrenReact) => {
  return (
    <Suspense
      fallback={
        <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
          <DotLoader size="xl" />
        </Flex>
      }
    >
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <BrowserRouter>{children}</BrowserRouter>
        </AuthProvider>
      </ChakraProvider>
    </Suspense>
  );
};

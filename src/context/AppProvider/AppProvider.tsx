import { ChakraProvider, Flex } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import DotLoader from 'react-spinners/DotLoader';

import { AuthProvider } from '../global-provider/Global';

import { theme } from '@/styles';
import { IChildrenReact } from '@/types/types';
import '@fontsource/source-sans-pro';

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
          <BrowserRouter>{children}</BrowserRouter>
        </AuthProvider>
      </ChakraProvider>
    </Suspense>
  );
};

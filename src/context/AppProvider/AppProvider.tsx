import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '../AuthProvider/AuthProvider';

import { theme } from '@/styles';
import { IChildrenReact } from '@/types/IChildrenReact';

export const AppProvider = ({ children }: IChildrenReact) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <BrowserRouter>{children}</BrowserRouter>
        </AuthProvider>
      </ChakraProvider>
    </>
  );
};

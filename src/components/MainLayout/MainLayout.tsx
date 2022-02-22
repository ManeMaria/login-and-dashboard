import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { Header } from '../Header/Header';
import { MenuSideBar } from '../MenuSidebar/MenuSideBar';

export function MainLayout() {
  return (
    <main
      style={{
        width: 'min(120em, 100vw)',
        height: '100vh',
        margin: 'auto',
        position: 'relative',
      }}
    >
      <Flex bg="white.200" w="100%" h="100%" pos="relative">
        <MenuSideBar />
        <Box w="100%" h="10%" bgGradient="linear(to-tr, green.100, green.200)" />
        <Box
          w={['82%']}
          h="calc(100vh - 10px)"
          bg="white.200"
          pos="absolute"
          top="10px"
          left="230px"
          borderTopLeftRadius="5px"
          borderTopRightRadius="5px"
          p="0px 20px 20px 20px"
        >
          <Header />
          <Box w="100%">
            <Outlet />
          </Box>
        </Box>
      </Flex>
    </main>
  );
}

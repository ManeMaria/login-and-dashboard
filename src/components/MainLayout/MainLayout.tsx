import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { Header } from '../Header/Header';
import { MenuSideBar } from '../MenuSidebar/MenuSideBar';

import stl from './styles.module.css';
export function MainLayout() {
  return (
    <main className={stl.main}>
      <Flex bg="white.200" w="100%" h="100%" pos="relative">
        <MenuSideBar />
        <Box w="100%" h="10%" bgGradient="linear(to-tr, green.100, green.200)" />
        <Box
          w={['calc(100% - 80px)', 'calc(100% - 230px)']}
          h="calc(100vh - 10px)"
          bg="white.200"
          pos="absolute"
          top="10px"
          left={['80px', '230px']}
          borderTopLeftRadius="5px"
          borderTopRightRadius="5px"
          p="0px 10px 10px 10px"
        >
          <Header />
          <Box w="100%" margin="0 auto" overflowY="scroll" height="90%">
            <Outlet />
          </Box>
        </Box>
      </Flex>
    </main>
  );
}

import { Flex, FormControl, FormLabel, Image, Input, Text, Box } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

import '@fontsource/source-sans-pro';
import logo2 from '@/assets/icons/leaf.png';
import elementBottomRight from '@/assets/images/element-bottom-right.svg';
import elementTopLeft from '@/assets/images/element-top-left.svg';
export const Login = () => {
  // const navigate = useNavigate();

  return (
    <Flex w="100vw" h="100vh" bg="with">
      <Flex flex="1" alignItems="flex-start" justifyContent={'flex-start'}>
        <Image src={elementTopLeft} alt="elemento topo esquerdo" w={'70%'} />
      </Flex>
      <Flex justifyContent="center" alignItems="center" flexDirection="column" flex="3" gap="10px">
        <Image src={logo2} alt="logo marca" w="150px" marginBottom="5%" />
        <Text fontSize="md" color="gray.200">
          Olá, faça seu login abaixo!
        </Text>
        <Box w="40%">
          <FormControl>
            <FormLabel htmlFor="email">Usuário</FormLabel>
            <Input id="user" type="text" />

            <FormLabel htmlFor="email">Senha</FormLabel>
            <Input id="password" type="password" />
          </FormControl>
        </Box>
      </Flex>
      <Flex flex="1" alignItems="flex-end" justifyContent={'flex-end'}>
        <Image src={elementBottomRight} alt="elemento baixo direito" w={'80%'} />
      </Flex>
    </Flex>
  );
};

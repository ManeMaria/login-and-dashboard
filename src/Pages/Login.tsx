import { Flex, Image, Box } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

import '@fontsource/source-sans-pro';
import logo2 from '@/assets/icons/leaf.png';
import elementBottomRight from '@/assets/images/element-bottom-right.svg';
import elementTopLeft from '@/assets/images/element-top-left.svg';
import { Form } from '@/components/Form/Form';
export const Login = () => {
  // const navigate = useNavigate();

  return (
    <Flex w="100vw" h="100vh">
      <Flex
        flex="1"
        alignItems="flex-start"
        justifyContent={'flex-start'}
        w={'70%'}
        d={['none', 'flex']}
      >
        <Image src={elementTopLeft} alt="elemento topo esquerdo" />
      </Flex>
      <Flex justifyContent="center" alignItems="center" flexDirection="column" flex="3" gap="10px">
        <Box h={['150px', '200px']}>
          <Image src={logo2} alt="logo marca" w={['130px', '150px']} />
        </Box>

        <Box w="100%">
          <Form w={['90%', '100%', '100%', '35%']} margin="auto" />
        </Box>
      </Flex>
      <Flex
        flex="1"
        alignItems="flex-end"
        justifyContent={'flex-end'}
        w={'70%'}
        d={['none', 'flex']}
      >
        <Image src={elementBottomRight} alt="elemento baixo direito" />
      </Flex>
    </Flex>
  );
};

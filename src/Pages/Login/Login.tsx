import { Flex, Image, Box } from '@chakra-ui/react';
import { useState } from 'react';
import '@fontsource/source-sans-pro';
import { useNavigate } from 'react-router';

import elementBottomRight from '@/assets/images/element-bottom-right.svg';
import elementTopLeft from '@/assets/images/element-top-left.svg';
import logo2 from '@/assets/images/leaf-2kb.png';
import { FormLogin } from '@/components/FormLogin/FormLogin';
import { useAuth } from '@/context/global-provider/Global';
import { useMessages } from '@/hooks/useMessages';
// import { decodeUserData } from '@/lib/authentication';
import { HTMLElementEvent } from '@/types/htmlElementEvent';
import { cookies, storage } from '@/utils';

export const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const { setOptions } = useMessages();
  const [isLoading, setIsLoading] = useState(false);

  const getUser = async (user: string, password: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = (Math.random() * (2 - 1) + 1).toFixed();

        res === '1' ? resolve('test-token') : reject(new Error('Falhou a consulta'));
      }, 3000);
    });
  };

  const validateInputs = (...fildes: HTMLInputElement[]): boolean => {
    for (const field of fildes) {
      if (!field.value.trim()) {
        return false;
      }
    }

    return true;
  };
  // const navigate = useNavigate();
  const handleSubmit = async (event: HTMLElementEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const { target } = event;
      const [user, password, remindMe] = [target.user, target.password, target.remindMe];
      const isValid = validateInputs(user, password);

      if (!isValid) {
        setOptions({
          status: 'warning',
          title: 'Importante',
          description: 'Valores inválidos',
        });
        setIsLoading(false);
        return;
      }

      const isUser = await getUser(user, password);

      if (isUser) {
        setIsLoading(false);
        const decodeUser = isUser; //recebe a função de decode

        //pegará o token
        cookies.setAccess(isUser);
        if (remindMe) {
          storage.setUser(decodeUser);
        }
        signin(decodeUser, () => navigate('dashboard'));
      }

      // decodeUserData
    } catch (error) {
      if (error instanceof Error) {
        setOptions({
          status: 'warning',
          title: 'Importante',
          description: error.message,
        });
      }

      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <Flex w="100vw" h="100vh" className="animate__animated animate__fadeIn animate__delay-0.5s">
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
          <FormLogin
            isLoading={isLoading}
            w={['90%', '100%', '100%', '35%']}
            margin="auto"
            onSubmit={handleSubmit}
          />
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

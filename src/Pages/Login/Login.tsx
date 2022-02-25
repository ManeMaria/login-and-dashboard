/* eslint-disable prefer-const */
import { Flex, Image, Box, Fade } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import elementBottomRight from '@/assets/images/element-bottom-right.svg';
import elementTopLeft from '@/assets/images/element-top-left.svg';
import logo2 from '@/assets/images/leaf-2kb.png';
import { FormLogin } from '@/components/FormLogin/FormLogin';
import { useAuth } from '@/context/AuthProvider/AuthProvider';
import { useMessages } from '@/hooks/useMessages';
import { api } from '@/lib/axios';
import { HTMLElementEvent } from '@/types/htmlElementEvent';
import { cookies, storage } from '@/utils';
import { session } from '@/utils/session';

type getUser = {
  refreshToken: string;
  token: string;
};

export const Login = () => {
  const navigate = useNavigate();
  const { signin } = useAuth();
  const { setOptions } = useMessages();
  const [isLoading, setIsLoading] = useState(false);
  const isMountedRef = useRef(false);

  //evita erro de vazamento de memória do react
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const getUser = async (user: string, password: string): Promise<getUser> => {
    const {
      data: { data },
    } = await api.post('https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps/login', {
      user,
      password,
    });
    return data;
  };

  const validateInputs = (...fields: HTMLInputElement[]): boolean | undefined => {
    for (const input of fields) {
      if (!input.value.trim()) {
        return false;
      }

      return true;
    }
  };

  const handleSubmit = async (event: HTMLElementEvent<HTMLFormElement>): Promise<void> => {
    if (!isMountedRef.current) {
      return;
    }
    event.preventDefault();
    setIsLoading(true);
    try {
      const { target } = event;
      const [user, password, RememberMe] = [target.user, target.password, target.RememberMe];
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

      const { token, refreshToken } = await getUser(user.value, password.value);

      if (token) {
        setIsLoading(false);
        const decodeUser = token; //recebe a função de decode

        //lembra o login
        if (RememberMe.checked) {
          storage.setUser({ id: decodeUser });
        }

        session.setUser({ id: decodeUser });
        cookies.setAccess(token);
        cookies.setRefresh(refreshToken);

        signin(
          {
            dataUser: decodeUser,
            token: token,
          },
          () => navigate('/dashboard'),
        );
      }

      // decodeUserData
    } catch (error) {
      if (error instanceof Error) {
        setOptions({
          status: 'warning',
          description: error.message,
        });
      }

      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <Fade in={true} delay={0.8}>
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
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          flex="3"
          gap="10px"
        >
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
    </Fade>
  );
};

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

type AuthUser = {
  refreshToken: string;
  token: string;
};

type GetUser = {
  name: string;
  avatar: string;
};

export function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const { setOptions } = useMessages();
  const [isLoading, setIsLoading] = useState(false);
  const isMountedRef = useRef(false);

  //evita o problema de vazamento de memória do react
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  async function authUser(user: string, password: string): Promise<AuthUser> {
    const {
      data: { data },
    } = await api.post('https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps/login', {
      user,
      password,
    });
    return data;
  }

  async function getUser(): Promise<GetUser> {
    const {
      data: { data },
    } = await api('https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps/me');
    return data;
  }

  function validateInputs(...fields: HTMLInputElement[]): boolean | undefined {
    for (const input of fields) {
      if (!input.value.trim()) {
        return false;
      }

      return true;
    }
  }

  async function handleSubmit(event: HTMLElementEvent<HTMLFormElement>): Promise<void> {
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

      const { token, refreshToken } = await authUser(user.value, password.value);

      if (token) {
        setIsLoading(false);

        const dataUser = await getUser();

        if (dataUser) {
          //lembra o login
          if (RememberMe.checked) {
            storage.setUser({ ...dataUser, token });
          }

          session.setUser({ ...dataUser, token });
          cookies.setAccess(token);
          cookies.setRefresh(refreshToken);
          setUser({
            dataUser,
            token,
          });
          navigate('/dashboard');
        }
      }
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
  }

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
}

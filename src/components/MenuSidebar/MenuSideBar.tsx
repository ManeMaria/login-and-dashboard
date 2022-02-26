import { Flex, Image, Box, Text, List, ListItem } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import dashboard from '@/assets/icons/icon-dashboard.svg';
import exit from '@/assets/icons/icon-exit.svg';
import elementeMenuNavBottom from '@/assets/images/elemente-menu-nav-bottom.svg';
import elementeMenuNavTop from '@/assets/images/elemente-menu-nav-top.svg';
import { useAuth } from '@/context/AuthProvider/AuthProvider';
import { logoutFn } from '@/lib/authentication';

export function MenuSideBar() {
  const navigate = useNavigate();
  const {
    user: { dataUser },
  } = useAuth();
  return (
    <aside>
      <Flex
        h="100%"
        w={['80px', '250px']}
        flexDirection="column"
        bg="white.50"
        justifyContent="center"
      >
        <Flex alignItems="flex-start" d={['none', 'flex']}>
          <Image src={elementeMenuNavTop} alt="elemento menu top" />
        </Flex>

        <Flex h="100%" mt="10px" p="0 8% 0 0px" flexDirection="column">
          <nav>
            <List w="85%" margin="0 5%">
              <ListItem
                h="42px"
                bg="green.50"
                borderRadius="20px"
                w="100%"
                p="10px 15px"
                cursor="pointer"
              >
                <Flex alignItems="center" h="100%" w="100%">
                  <Image src={dashboard} alt="icon dashboard" />
                  <Text color="green.200" fontWeight="600" ml="10px" d={['none', 'block']}>
                    Dashboard
                  </Text>
                </Flex>
              </ListItem>
            </List>
          </nav>
          <Box w="85%" m="auto auto 0 auto" borderTop="1px solid " borderColor="gray.100">
            <Text
              color="green.200"
              fontSize="0.8em"
              textTransform="uppercase"
              fontWeight="600"
              mt="10px"
            >
              programador
            </Text>
            <Text color="gray.300" fontSize="0.8em">
              {dataUser?.name}
            </Text>

            <Flex
              m="20px 0"
              cursor="pointer"
              onClick={() => {
                logoutFn(() => navigate('/login'));
              }}
            >
              <Image src={exit} alt="icon dashboard" />
              <Text color="gray.300" fontSize="0.8em" m="0 10px">
                Sair
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Flex alignItems="flex-end" d={['none', 'flex']} pos="relative">
          <Image src={elementeMenuNavBottom} alt="elemento menu baixo" />
          <Box zIndex="2" pos="absolute" left="5%" top="80px">
            <Text color="white.50" fontSize="0.7em" fontWeight="300">
              Uma plataforma
            </Text>
            <Text
              fontSize="0.9em"
              color="white.50"
              textTransform="uppercase"
              fontWeight="900"
              letterSpacing="0.72px"
            >
              new wave
            </Text>
          </Box>
        </Flex>
      </Flex>
    </aside>
  );
}

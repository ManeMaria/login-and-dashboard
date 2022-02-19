import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  SimpleGrid,
  useColorMode,
} from '@chakra-ui/react';
import { BeatLoader } from 'react-spinners';

import { Input } from '../input/Input';
import { TextComponent } from '../TextComponent/TextComponent';

export function Form({ ...restProps }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <FormControl {...restProps}>
      <Box textAlign="center" margin={'2em 0'}>
        <TextComponent colorDefalt="gray.200" colorDark="white">
          Olá, faça seu login abaixo!
        </TextComponent>
      </Box>
      <SimpleGrid spacingY="1em">
        <Input label="Usuário" required />
        <Input label="Senha" type="password" required />
      </SimpleGrid>
      <Box padding="0 0 0 15px" margin="1em 0">
        <Checkbox spacing="0.8rem" defaultChecked fontSize="0.8em" color="gray.200" size="lg">
          <TextComponent>Lembrar-me</TextComponent>
        </Checkbox>
      </Box>
      <Box color="green" textAlign="center" margin="10px 0 20px 0">
        <a style={{ textDecoration: 'underline' }} href="/">
          <TextComponent>Esqueci a senha</TextComponent>
        </a>
      </Box>
      <Flex justifyContent="center">
        <Button
          w="90%"
          borderRadius="22px"
          // isLoading={true}
          bg="green"
          color="white"
          spinner={<BeatLoader size={8} color="white" />}
          onClick={toggleColorMode}
        >
          Enviar Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Flex>
    </FormControl>
  );
}

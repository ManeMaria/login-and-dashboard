import { Box, Button, Checkbox, Flex, SimpleGrid } from '@chakra-ui/react';
import { BeatLoader } from 'react-spinners';

import { FormComponent } from '../FormComponent/FormComponent';
import { InputLogin } from '../InputLogin';
import { TextComponent } from '../TextComponent/TextComponent';

import stl from './styles.module.css';

import { IDynamicProps } from '@/types/dynamicProps';

interface IForm extends IDynamicProps {
  isLoading: boolean;
}

export function FormLogin({ isLoading, ...restProps }: IForm) {
  return (
    <Box {...restProps}>
      <FormComponent>
        <Box textAlign="center" margin={'2em 0'}>
          <TextComponent colorDefalt="gray.200" colorDark="white.50">
            Olá, faça seu login abaixo!
          </TextComponent>
        </Box>
        <SimpleGrid spacingY="1em">
          <InputLogin label="Usuário" required name="user" />
          <InputLogin label="Senha" type="password" required name="password" />
        </SimpleGrid>
        <Box padding="0 0 0 15px" margin="1em 0">
          <Checkbox spacing="0.8rem" fontSize="0.8em" color="gray.200" size="lg" name="RememberMe">
            <TextComponent>Lembrar-me</TextComponent>
          </Checkbox>
        </Box>
        <Box color="green.100" textAlign="center" margin="10px 0 20px 0">
          <a className={stl.anchor} href="/">
            <TextComponent colorDefalt="green.100">Esqueci a senha</TextComponent>
          </a>
        </Box>
        <Flex justifyContent="center">
          <Button
            type="submit"
            w="90%"
            borderRadius="22px"
            isLoading={isLoading}
            bg="green.100"
            color="white.50"
            spinner={<BeatLoader size={8} color="white.50" />}
          >
            Enviar
          </Button>
        </Flex>
      </FormComponent>
    </Box>
  );
}

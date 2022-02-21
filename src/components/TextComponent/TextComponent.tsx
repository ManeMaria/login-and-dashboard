import { Text, TextProps, useColorModeValue } from '@chakra-ui/react';

interface ITextComponent extends TextProps {
  colorDefalt?: string;
  colorDark?: string;
}
export function TextComponent({
  colorDefalt = 'gray.200',
  colorDark = 'white',
  children,
  ...restProps
}: ITextComponent) {
  const color = useColorModeValue(colorDefalt, colorDark);

  return (
    <Text {...restProps} fontSize="md" color={color}>
      {children}
    </Text>
  );
}

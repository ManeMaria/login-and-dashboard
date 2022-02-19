import { Text, useColorModeValue } from '@chakra-ui/react';

import { IChildrenReact } from '@/types/IChildrenReact';

interface ITextComponent extends IChildrenReact {
  colorDefalt?: string;
  colorDark?: string;
}
export function TextComponent({
  colorDefalt = 'gray.200',
  colorDark = 'white',
  children,
}: ITextComponent) {
  const color = useColorModeValue(colorDefalt, colorDark);

  return (
    <Text fontSize="md" color={color}>
      {children}
    </Text>
  );
}

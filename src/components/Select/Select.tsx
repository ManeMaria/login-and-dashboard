import { Box, Flex, Image, useColorMode } from '@chakra-ui/react';
import { SelectHTMLAttributes, useEffect, useRef } from 'react';

import stl from './select.styles.module.css';

import arrow from '@/assets/icons/arrow.svg';
import { colorHandle } from '@/utils/functions';
interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export function Select({ label, children, ...restProps }: ISelect) {
  const { colorMode } = useColorMode();
  const select = useRef<HTMLSelectElement | null>(null);
  const labelRef = useRef<HTMLLabelElement | null>(null);

  useEffect((): void => {
    colorHandle(colorMode, select, labelRef);
  }, [colorMode]);

  const handleClick = (): void => {
    select.current?.focus();
  };
  return (
    <div className={`${stl.labelFloat} ${stl.divFloat} ${stl.selectlabel}`}>
      <label ref={labelRef}>{label}</label>
      <Flex>
        <select {...restProps} ref={select} id="se">
          {children}
        </select>
        <Flex
          alignItems="center"
          pos="absolute"
          right="20px"
          h="48px"
          p="10px 0"
          onClick={handleClick}
        >
          <Box h="100%" bg="gray.100" w="1px" mr="20px" />
          <Image src={arrow} alt="seta de seleção" />
        </Flex>
      </Flex>
    </div>
  );
}

import { useColorMode } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

import { Input } from '../Input/Input';

import { IDynamicProps } from '@/types/dynamicProps';
import './input.styles.css';
import { colorHandle } from '@/utils/functions';

interface IInputLogin extends IDynamicProps {
  label: string;
}
export function InputLogin({ label, ...resProps }: IInputLogin) {
  const { colorMode } = useColorMode();
  const input = useRef<HTMLInputElement | null>(null);
  const labelRef = useRef<HTMLLabelElement | null>(null);

  useEffect((): void => {
    colorHandle(colorMode, input, labelRef);
  }, [colorMode]);

  return (
    <div className={`label-float div-float inputlabel`}>
      <Input ref={input} {...resProps} placeholder=" " />
      <label ref={labelRef}>{label}</label>
    </div>
  );
}

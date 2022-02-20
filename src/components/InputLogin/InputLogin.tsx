import { useColorMode } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

import { Input } from '../Input/Input';

import { IDynamicProps } from '@/types/dynamicProps';

import './input.styles.css';

interface IInputLogin extends IDynamicProps {
  label: string;
}
export function InputLogin({ label, ...resProps }: IInputLogin) {
  const { colorMode } = useColorMode();
  const input = useRef<HTMLInputElement | null>(null);
  const labelRef = useRef<HTMLLabelElement | null>(null);

  useEffect((): void => {
    colorHandle();
  }, [colorMode]);

  function colorHandle(): void {
    const elementeInput = input.current;
    const elementeLabel = labelRef.current;
    if (!elementeInput || !elementeInput) {
      return;
    }
    elementeInput!.style.cssText =
      colorMode === 'dark'
        ? 'color: var(--white); background: #1a202c; border-color: var(--green'
        : 'color: var(--green)';

    elementeLabel!.style.cssText =
      colorMode === 'dark'
        ? 'color: var(--white); background: #1a202c; border-color: var(--green'
        : 'color: var(--green)';
  }

  return (
    <div className={`label-float div-float inputlabel`}>
      <Input ref={input} {...resProps} placeholder=" " />
      <label ref={labelRef}>{label}</label>
    </div>
  );
}

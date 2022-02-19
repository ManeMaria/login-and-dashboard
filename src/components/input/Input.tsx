import { useColorMode } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';

import { IDynamicProps } from '@/types/dynamicProps';

import './imputs_ntd-grid.css';

interface IInput extends IDynamicProps {
  label: string;
}
export function Input({ label, ...resProps }: IInput) {
  const { colorMode } = useColorMode();
  const input = useRef<HTMLInputElement | null>(null);
  const labelRef = useRef<HTMLLabelElement | null>(null);

  useEffect((): void => {
    colorHandle();
  }, [colorMode]);

  function colorHandle(): void {
    const elementeInput = input.current;
    const elementeLabel = labelRef.current;
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
      <input ref={input} className={`inputntd_`} placeholder=" " {...resProps} />
      <label ref={labelRef}>{label}</label>
    </div>
  );
}

import { MutableRefObject } from 'react';

type ColorMode = 'light' | 'dark';

export function colorHandle(colorMode: ColorMode, ...refs: MutableRefObject<any>[]): void {
  for (const ref of refs) {
    const element = ref.current;
    if (!element) {
      return;
    }

    element!.style.cssText =
      colorMode === 'dark'
        ? 'color: var(--white); background: #1a202c; border-color: var(--green'
        : 'color: var(--green)';
  }
}

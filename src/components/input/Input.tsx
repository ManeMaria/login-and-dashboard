/* eslint-disable react/display-name */
import { forwardRef } from 'react';
type InputProps = JSX.IntrinsicElements['input'];
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input {...props} ref={ref} />
));

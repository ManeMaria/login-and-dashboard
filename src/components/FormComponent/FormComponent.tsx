import { ReactElement } from 'react';

export function FormComponent({ children, ...props }): ReactElement<HTMLFormElement> {
  return <form {...props}>{children}</form>;
}

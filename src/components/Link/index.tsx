import { HTMLAttributes, ReactNode } from 'react';

import { LinkContainer } from './styles';

interface ILinkProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}

export function Link({ children, ...rest }: ILinkProps) {
  return <LinkContainer {...rest}>{children}</LinkContainer>;
}

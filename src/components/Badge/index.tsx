import { ReactNode } from 'react';

import { BadgeRootStyle, BadgeStyle } from './styles';

interface IBadgeProps {
  icon: ReactNode;
  text: string;
  ariaLabel: string;
}

interface IBadgeRootProps {
  children: ReactNode;
}

function Badge({ icon, text, ariaLabel }: IBadgeProps) {
  return (
    <BadgeStyle aria-label={ariaLabel}>
      {icon}
      <span>{text}</span>
    </BadgeStyle>
  );
}

function Root({ children }: IBadgeRootProps) {
  return <BadgeRootStyle>{children}</BadgeRootStyle>;
}

export { Badge, Root };

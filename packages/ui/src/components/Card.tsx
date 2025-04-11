import React from 'react';
import { Card as MantineCard, CardProps as MantineCardProps, CardSection } from '@mantine/core';

export interface CardProps extends MantineCardProps {
  withBorder?: boolean;
  withShadow?: boolean;
}

export function Card({
  withBorder = true,
  withShadow = true,
  shadow = 'md',
  radius = 'md',
  padding = 'md',
  ...props
}: CardProps) {
  return (
    <MantineCard
      withBorder={withBorder}
      shadow={withShadow ? shadow : undefined}
      radius={radius}
      padding={padding}
      {...props}
    />
  );
}

// CardSectionもエクスポート
export { CardSection };

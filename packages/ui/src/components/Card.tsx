import React from 'react';
import { Card as MantineCard, CardProps as MantineCardProps, CardSection } from '@mantine/core';

export interface CardProps extends MantineCardProps {
  withBorder?: boolean;
  withShadow?: boolean;
}

export function Card({ withBorder = true, withShadow = true, shadow = 'md', ...props }: CardProps) {
  return <MantineCard withBorder={withBorder} shadow={withShadow ? shadow : undefined} {...props} />;
}

// CardSectionもエクスポート
export { CardSection };

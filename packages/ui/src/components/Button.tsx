import React from 'react';
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';

export interface ButtonProps extends Omit<MantineButtonProps, 'color'> {
  color?: 'primary' | 'warning' | 'accent' | string;
  variant?: 'filled' | 'outline' | 'light' | 'subtle' | 'transparent' | 'white' | 'default';
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({ color = 'primary', variant = 'filled', type, onClick, ...props }: ButtonProps) {
  return <MantineButton color={color} variant={variant} type={type} onClick={onClick} {...props} />;
}

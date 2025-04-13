import { Button as MantineButton, type ButtonProps as MantineButtonProps } from '@mantine/core'
import type { ButtonHTMLAttributes } from 'react'

// HTMLButtonElementの標準イベントハンドラ
type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

// 独自のカラーオプションを定義
export type CustomButtonColor = 'primary' | 'warning' | 'accent' | string

// HTMLButtonElementの標準属性も明示的に継承
export type ButtonProps = Omit<MantineButtonProps, 'color'> &
  NativeButtonProps & { color?: CustomButtonColor }

export function Button({
  color = 'primary',
  variant = 'light',
  radius = 'md',
  ...props
}: ButtonProps) {
  return <MantineButton color={color} variant={variant} radius={radius} {...props} />
}

// MantineのButtonコンポーネントの機能をすべて保持する
Button.Group = MantineButton.Group
Button.GroupSection = MantineButton.GroupSection

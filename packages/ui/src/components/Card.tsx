import { CardSection, Card as MantineCard, type CardProps as MantineCardProps } from '@mantine/core'
import React from 'react'

export interface CardProps extends MantineCardProps {
  withBorder?: boolean
  withShadow?: boolean
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
  )
}

// CardSectionもエクスポート
export { CardSection }

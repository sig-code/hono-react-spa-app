import {
  TextInput as MantineTextInput,
  type TextInputProps as MantineTextInputProps,
} from '@mantine/core'
import React from 'react'

export interface TextInputProps extends MantineTextInputProps {
  // 追加のプロパティがあれば定義
}

export function TextInput({ radius = 'md', ...props }: TextInputProps) {
  return <MantineTextInput radius={radius} {...props} />
}

import React from 'react';
import { TextInput as MantineTextInput, TextInputProps as MantineTextInputProps } from '@mantine/core';

export interface TextInputProps extends MantineTextInputProps {
  // 追加のプロパティがあれば定義
}

export function TextInput({ radius = 'md', ...props }: TextInputProps) {
  return <MantineTextInput radius={radius} {...props} />;
}

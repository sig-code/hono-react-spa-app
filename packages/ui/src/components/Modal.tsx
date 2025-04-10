import React from 'react';
import { Modal as MantineModal, ModalProps as MantineModalProps } from '@mantine/core';

export interface ModalProps extends MantineModalProps {
  // 追加のプロパティがあれば定義
}

export function Modal({ centered = true, ...props }: ModalProps) {
  return <MantineModal centered={centered} {...props} />;
}

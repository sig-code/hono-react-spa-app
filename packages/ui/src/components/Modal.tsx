import { Modal as MantineModal, type ModalProps as MantineModalProps } from "@mantine/core";
import React from "react";

export interface ModalProps extends MantineModalProps {
  // 追加のプロパティがあれば定義
}

export function Modal({ centered = true, ...props }: ModalProps) {
  return <MantineModal centered={centered} {...props} />;
}

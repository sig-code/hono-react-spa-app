import React from 'react';
import { DatePickerInput } from '@mantine/dates';

// シンプルな型定義
export interface DatePickerProps {
  label?: string;
  placeholder?: string;
  value?: Date | null;
  onChange?: (value: Date | null) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// シンプルなラッパーコンポーネント
export function DatePicker({
  label,
  placeholder,
  value,
  onChange,
  required,
  disabled,
  className,
  style
}: DatePickerProps) {
  return (
    <DatePickerInput
      type="default"
      valueFormat="YYYY/MM/DD"
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className={className}
      style={style}
    />
  );
}

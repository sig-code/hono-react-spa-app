import React from 'react';
import { MantineProvider as BaseMantineProvider } from '@mantine/core';
import { theme } from '../theme';

interface MantineProviderProps {
  children: React.ReactNode;
}

export function MantineProvider({ children }: MantineProviderProps) {
  return (
    <BaseMantineProvider theme={theme}>
      {children}
    </BaseMantineProvider>
  );
}

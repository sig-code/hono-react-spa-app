import React from "react";
import { MantineProvider as BaseMantineProvider, createTheme } from "@mantine/core";
import { theme } from "../theme";

interface MantineProviderProps {
  children: React.ReactNode;
}

export function MantineProvider({ children }: MantineProviderProps) {
  return (
    <BaseMantineProvider
      theme={theme}
      defaultColorScheme="light"
    >
      {children}
    </BaseMantineProvider>
  );
}

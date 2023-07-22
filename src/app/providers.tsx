"use client";
import React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    fem: {
      tomato: "hsl(4, 100%, 67%)",
      darkSlateGrey: "hsl(234, 29%, 20%)",
      charcoalGrey: "hsl(235, 18%, 26%)",
      grey: "hsl(231, 7%, 60%)",
    },
  },
  styles: {
    global: {
      body: {
        color: "fem.darkSlateGrey",
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CartContextProvider } from "@/components/contexts/cartContext";

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return (
    <CartContextProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </CartContextProvider>
  );
}

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return <QueryClientProvider>{children}</QueryClientProvider>;
}

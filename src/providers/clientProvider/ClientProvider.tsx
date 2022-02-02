import { QueryClient, QueryClientProvider } from 'react-query';
import { ClientProviderProps } from './ClientProvider.types';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export const ClientProvider = ({ children }: ClientProviderProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

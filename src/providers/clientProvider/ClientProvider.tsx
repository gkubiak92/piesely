import { QueryClient, QueryClientProvider } from 'react-query';
import { ClientProviderProps } from './ClientProvider.types';

const queryClient = new QueryClient();

export const ClientProvider = ({ children }: ClientProviderProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

import { QueryClient } from '@tanstack/react-query';

export const getQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5000,
      },
    },
  });
};

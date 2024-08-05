// hooks/useUser.ts
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useUser(id: string) {
  const { data, error } = useSWR(`/api/users/${id}`, fetcher);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  };
}

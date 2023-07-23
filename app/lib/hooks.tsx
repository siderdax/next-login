import useSWR from 'swr';

const fetcher = (args: any) => fetch(args).then((res) => res.text());

export function useUser() {
  const { data, error } = useSWR('http://cola053.asuscomm.com:4000/test', fetcher);
  return error ? null : data;
}

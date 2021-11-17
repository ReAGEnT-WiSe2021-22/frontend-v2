export const useFetch = () => {
  const fetchApi: typeof fetch = (input, init?) => {
    const { baseUrl } = window as any;
    return fetch(`${baseUrl}${input}`, init);
  };

  return {
    fetchApi,
  };
};

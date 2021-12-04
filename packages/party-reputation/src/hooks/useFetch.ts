import axios, { AxiosRequestConfig } from 'axios';

export const useFetch = () => {
  /**
  * Wrapper arround the method to fetch external API.
  * @param url URL of the external API.
  * @param config Axios-like request configuration.
  */
  const fetchApi = (url: string, config?: AxiosRequestConfig) => {
    const { baseUrl } = (window as any);
    return axios(`${baseUrl ?? ''}${url}`, config);
  };

  return {
    fetchApi,
    apiRequest: fetchApi,
  };
};

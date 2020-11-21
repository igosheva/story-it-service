// libs
import { useEffect, useState } from 'react';

// utils
import req from '../utils/request';

// types
import type { TEndpointConfig, TQueryConfig } from '../config';
import type { TDataResponse } from '../types';

type TData = {
  data: TDataResponse | null;
  isLoading: boolean;
  isError: boolean;
};

const useData = (endpoint: TEndpointConfig, query: TQueryConfig, deps: any[] = []): TData => {
  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await req(endpoint, query);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;

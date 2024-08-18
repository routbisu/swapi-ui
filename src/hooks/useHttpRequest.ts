import { useEffect, useState } from "react";

/**
 * Hook to fetch data from a http rest endpoint, that returns data, loading and error states
 * @param url
 * @returns data, loading and error states
 */
export const useHttpRequest = <Data = any>(url?: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    (async () => {
      try {
        if (url) {
          const apiResponse = await fetch(url);
          const result = await apiResponse.json();

          setData(result as Data);
        }
      } catch (error) {
        setError(error as string);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

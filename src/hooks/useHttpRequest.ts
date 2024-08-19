import { useEffect, useState } from "react";

/**
 * Hook to fetch data from a http rest endpoint, that returns data, loading and error states
 * @param url
 * @returns data, loading and error states
 */
export const useHttpRequest = <Data = any>(url?: string) => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<string>();
  const [data, setData] = useState<Data>();

  const fetchData = async (url?: string) => {
    try {
      if (url) {
        setIsLoading(true);
        const apiResponse = await fetch(url);
        const result = await apiResponse.json();

        setData(result as Data);
      }
    } catch (error) {
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return {
    data,
    isLoading,
    error,
    fetchData,
  };
};

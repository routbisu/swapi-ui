import { useEffect, useState } from "react";

/**
 * Hook to fetch data from a http rest endpoint, that returns data, loading and error states
 * @param url
 * @returns data, loading and error states
 */
export const useHttpRequest = <
  Multiple extends boolean = false,
  Data = any,
  Response = Multiple extends true ? Data[] : Data,
>(
  url?: string | string[]
): {
  data?: Response;
  isLoading?: boolean;
  error?: string;
  fetchData: (url?: string | string[]) => Promise<void>;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<Response>();

  const fetchData = async (url?: string | string[]) => {
    try {
      if (url) {
        setIsLoading(true);

        /** For multiple requests */
        if (Array.isArray(url)) {
          const apiResponses = await Promise.all(url?.map((u) => fetch(u)));
          const results = await Promise.all(
            apiResponses?.map((response) => response.json())
          );

          setData(results as Response);
        } else {
          /** For single requests */
          const apiResponse = await fetch(url);
          const result = await apiResponse.json();

          setData(result);
        }
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

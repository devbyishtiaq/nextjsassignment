import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { apiBaseUrl } from "@/lib/constants";
import { Product } from "@/types";

const useProducts = () => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(`${apiBaseUrl}/products`, {
          cancelToken: cancelTokenSource.token,
        });
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        if (!axios.isCancel(error)) {
          const axiosError = error as AxiosError;
          setError(axiosError.message);
          setIsLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      cancelTokenSource.cancel("Request canceled");
    };
  }, []);

  return { data, isLoading, error };
};

export default useProducts;

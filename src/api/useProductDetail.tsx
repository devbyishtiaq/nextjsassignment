import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { apiBaseUrl } from "@/lib/constants";
import { Product } from "@/types";

const useProductDetail = (id: any) => {
  const [data, setData] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product>(
          `${apiBaseUrl}/products/${id}`,
          {
            cancelToken: cancelTokenSource.token,
          }
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        if (!axios.isCancel(error)) {
          const axiosError = error as AxiosError;
          setError(axiosError);
          setIsLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      cancelTokenSource.cancel("Request canceled");
    };
  }, [id]);

  return { data, isLoading, error };
};

export default useProductDetail;

import { useCallback, useState } from "react";

export default function useAsync(fn) {
  const [isLoading, setIsLoading] = useState(false);
  const execute = useCallback(
    async (...args) => {
      setIsLoading(true);
      const res = await fn(...args);
      setIsLoading(false);
      return res;
    },
    [fn]
  );

  return [isLoading, execute];
}

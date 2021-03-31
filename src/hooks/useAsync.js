import { useCallback, useState, lazy, useRef } from "react";

export default function useAsync(fn) {
  const [isLoading, setIsLoading] = useState(false);
  const comp = useRef();

  const execute = useCallback(
    async (...args) => {
      const promise = fn(...args);
      comp.current = lazy(() => promise);

      setIsLoading(true);
      const res = await promise;
      setIsLoading(false);
      return res;
    },
    [fn]
  );

  return [isLoading, execute, comp.current];
}

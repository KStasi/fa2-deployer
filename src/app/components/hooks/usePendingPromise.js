import { useState, useEffect } from "react";

export const usePendingPromise = (fetcher, transformer) => {
  const [fetching, setFetching] = useState();
  const [error, setError] = useState();
  const [data, setStorage] = useState();

  useEffect(() => {
    let isUnmounted = false;
    (async () => {
      try {
        setFetching(true);
        setError(undefined);

        const result = await fetcher();
        !isUnmounted && setStorage(transformer ? transformer(result) : result);
      } catch (e) {
        !isUnmounted &&
          setError(
            "Something went wrong while fetching storage: " + e.toString()
          );
      } finally {
        !isUnmounted && setFetching(false);
      }
    })();

    return () => {
      isUnmounted = true;
    };
  }, [fetcher, transformer]);

  return { fetching, error, data };
};

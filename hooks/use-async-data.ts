"use client";

import { useState, useEffect, useCallback } from "react";

export type AsyncState<T> = 
  | { status: "idle"; data: null; error: null }
  | { status: "loading"; data: null; error: null }
  | { status: "success"; data: T; error: null }
  | { status: "error"; data: null; error: Error };

export function useAsyncData<T>(
  fetchFn: () => Promise<T>,
  dependencies: unknown[] = []
) {
  const [state, setState] = useState<AsyncState<T>>({
    status: "idle",
    data: null,
    error: null,
  });

  const execute = useCallback(async () => {
    setState({ status: "loading", data: null, error: null });
    try {
      const data = await fetchFn();
      setState({ status: "success", data, error: null });
    } catch (err) {
      setState({
        status: "error",
        data: null,
        error: err instanceof Error ? err : new Error("Unknown error"),
      });
    }
  }, [fetchFn]);

  const retry = useCallback(() => {
    execute();
  }, [execute]);

  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { ...state, retry };
}

// Simulate API fetch with delay
export async function simulateFetch<T>(data: T, delay = 1500): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
}

// Simulate API fetch that can fail
export async function simulateFetchWithError<T>(
  data: T,
  delay = 1500,
  shouldFail = false
): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Failed to fetch data. Please try again."));
      } else {
        resolve(data);
      }
    }, delay);
  });
}

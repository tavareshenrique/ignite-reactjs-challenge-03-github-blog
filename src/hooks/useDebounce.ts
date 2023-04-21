import { useRef, useEffect } from 'react';

type DebouncedFunction<T extends unknown[]> = (...args: T) => void;

export function useDebounce<T extends unknown[]>(
  fn: DebouncedFunction<T>,
  delay: number,
): DebouncedFunction<T> {
  const timeoutRef = useRef<null | number>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function debounceFn(...args: T) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debounceFn;
}

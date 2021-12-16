import { useEffect, useState } from "react";

function isNumzero(value) {
  return value === 0 ? true : !!value;
}

export function clearPlainObject(obj) {
  const result = {};
  Object.keys(obj).forEach((key) => {
    if (isNumzero(obj[key])) {
      result[key] = obj[key];
    }
  });
  return result;
}

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timmer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timmer);
    };
  }, [value, delay]);
  return debouncedValue;
}

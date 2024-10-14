import { useEffect, useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(100);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setCount(count => count - 1);
    }, 1000);

    return () => clearInterval(intervalRef);
  }, []);

  function reset() {
    setCount(100);
  }

  return {
    count,
    reset
  }
}
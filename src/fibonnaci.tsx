import { useMemo, useState } from "react";

export function Fibonnaci() {
  const [counter, setCounter] = useState(0);
  const n = useMemo(() => fibonacci(counter), [counter]);

  return <div>{n} <button onClick={() => setCounter(counter+1)}>INCREMENT</button></div>
}


function fibonacci(n: number): number {
  return n < 1 ? 0
       : n <= 2 ? 1
       : fibonacci(n - 1) + fibonacci(n - 2)
}
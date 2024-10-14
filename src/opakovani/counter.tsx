import { useCounter } from "./use-counter";

export function Counter() {

  const {count, reset} = useCounter();

  const shouldWarnUser = count < 10;

  return <div>
    {shouldWarnUser && <h1>Pozor! Blizi se konec</h1>}
    <button onClick={reset}>Reset</button>
    {count}
  </div>
}
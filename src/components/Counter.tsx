import { useState } from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className={classes.btn}>
      <button onClick={increment}>increment</button>
      <h1>{count}</h1>
    </div>
  )
}

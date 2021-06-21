import React, { useState } from 'react';
import Counter from "./components/Counter";
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const increaseAll = () => {
    setCount(count + 1);
  }

  const decreaseAll = () => {
    setCount(count - 1);
  }

  return (
    <>
    <Counter count={count}/>
    <Counter count={count}/>
    <Counter count={count}/>
    <button onClick={increaseAll}>+++</button>
    <button onClick={decreaseAll}>---</button>
    </>
  );
}

export default App;

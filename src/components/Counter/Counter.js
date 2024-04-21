"use client"; // Server Component to client component convert just use (use client);
import React from 'react';
import { useState } from 'react';
const Counter = () => {
  const [counter , setCounter] = useState(0)
  return (
    <div>
      <h2>Counter : {counter}</h2>
      <button className="btn border-t-cyan-500" onClick={() => setCounter (counter + 1)}>Increment</button>
      <button className="btn border-t-cyan-500" onClick={() => setCounter (counter - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
import React, { useState } from "react";
//shembulli i par me hooks useState i cili eshte funksion i react

export default function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>Item Ordered: {count} </p>
      <button onClick={() => setCount((c) => c + 1)}>Order one more</button>
    </div>
  );
}

import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClick = (type) => {
    if (type === "minus") {
      setCounter(counter - 1);
      return;
    }

    setCounter(counter + 1);
  };

  return (
    <div className="flex items-center gap-4 border p-1">
      <button className="btn" onClick={() => handleClick("minus")}>
        -
      </button>
      <p className="text-4xl font-bold">{counter}</p>
      <button className="btn" onClick={() => handleClick()}>
        +
      </button>
    </div>
  );
}

export default Counter;

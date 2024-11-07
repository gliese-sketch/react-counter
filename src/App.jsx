import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-2">
      <Counter />
      <Counter />
      <Counter />
    </main>
  );
}

export default App;

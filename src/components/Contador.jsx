import { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);

  function incrementarContador() {
    setCount(count + 1);
  }

  return (
    <div className="card">
      <h1>Contador: {count}</h1>
      <button className="btn" onClick={incrementarContador}>Clique aqui</button>
    </div>
  );
};

export default Contador;

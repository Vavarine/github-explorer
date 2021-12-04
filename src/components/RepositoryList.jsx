import { useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <section className="repositoy-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository="ebba" />
        <RepositoryItem repository="Juca" />
        <RepositoryItem repository="Bolinha" />
      </ul>
      <div>
        <p>{counter}</p>
        <button onClick={increment}>Adicionar</button>
      </div>
    </section>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Choose() {
  const [id, setId] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const irAPersonajes = () => {
    if (id > 0) navigate(`/pokemon/${id}`);
    else setError(true);
  };
  return (
    <div className="mt-5 text-center">
      <h1>Elige el numero de Pokedex de tu Pokemon</h1>
      <input
        type="number"
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <button onClick={irAPersonajes}>buscar</button>
      {error && (
        <p className="text-danger mt-5">
          Por favor introduce un numero mayor a 1
        </p>
      )}
    </div>
  );
}

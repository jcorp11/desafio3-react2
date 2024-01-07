import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Choose() {
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const irAPersonajes = () => {
    navigate(`/pokemon/${id}`);
  };
  return (
    <div className="mt-5">
      <h1>Elige un Pokemon</h1>
      <input
        type="number"
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <button onClick={irAPersonajes}>buscar</button>
    </div>
  );
}

import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
export default function Poke() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  const poke_URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  useEffect(() => {
    axios
      .get(poke_URL)
      .then((response) => {
        // console.log(poke_URL);
        // console.log(response.data);
        setPokemon(response.data);
        return response;
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log(pokemon);
  return (
    <div className="mt-5">
      {pokemon.id && (
        <PokemonCard id={pokemon.id} pokemon={pokemon}></PokemonCard>
      )}
    </div>
  );
}

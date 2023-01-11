import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navbar } from './assets/components/Navbar';
import {
  PokemonCard,
  PokemonsContainer,
} from './assets/components/PokemonCard';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    let endpoints = [];
    for (let i = 1; i < 152; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res))
      .catch((err) => console.log(err));
  };

  const pokemonFilter = (name) => {
    let filteredPokemons = [];
    if (name === '') {
      getPokemons();
    }
    for (let i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons);
  };

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <PokemonsContainer>
        {pokemons.map((pokemon, key) => (
          <PokemonCard
            name={pokemon.data.name}
            image={pokemon.data.sprites.front_default}
            id={pokemon.data.id}
            types={pokemon.data.types}
            key={key}
          />
        ))}
      </PokemonsContainer>
    </div>
  );
}

export default App;

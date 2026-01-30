import { Link } from 'react-router';

const PokemonList = (props) => {
  return (
    <>
      <h2>Pokemon</h2>
      <ul>
        {props.pokemon.map((currentPokemon, index) => (
          <li key={currentPokemon.name}>
            <Link to={`/pokemon/${currentPokemon._id}`}>
              {currentPokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PokemonList;

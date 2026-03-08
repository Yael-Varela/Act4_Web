import { getPokemonImageUrl } from "../services/pokemon_service";

export default function PokemonResult({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="card shadow mt-4">
      <div className="card-body text-center">
        <h3 className="card-title mb-3">Nuevo Pokémon creado</h3>

        <img
          src={getPokemonImageUrl(pokemon.pokedexId)}
          alt={pokemon.name}
          className="img-fluid mb-3"
          style={{ maxWidth: "160px" }}
        />

        <p><strong>Nombre:</strong> {pokemon.name}</p>
        <p><strong>Attack:</strong> {pokemon.attack}</p>
        <p><strong>Defense:</strong> {pokemon.defense}</p>
        <p><strong>Speed:</strong> {pokemon.speed}</p>
        <p><strong>HP:</strong> {pokemon.hp}</p>
        <p><strong>Pokedex ID:</strong> {pokemon.pokedexId}</p>
      </div>
    </div>
  );
}
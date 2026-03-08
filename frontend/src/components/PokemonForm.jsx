import { useEffect, useState } from "react";
import { getAllPokemon, hatchPokemon } from "../services/pokemon_service";
import PokemonResult from "./PokemonResult";

export default function PokemonForm() {
  const [pokemonList, setPokemonList] = useState([]);
  const [parent1, setParent1] = useState("");
  const [parent2, setParent2] = useState("");
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPokemon();
  }, []);

  async function loadPokemon() {
    try {
      const data = await getAllPokemon();
      setPokemonList(data);
    } catch {
      setError("Error cargando los pokémon");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const baby = await hatchPokemon(parent1, parent2, name);
      setResult(baby);
      setName("");
      await loadPokemon();
    } catch {
      setError("No se pudo crear el pokémon");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4">Pokemon Form</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Parent 1</label>
              <select
                className="form-select"
                value={parent1}
                onChange={(e) => setParent1(e.target.value)}
                required
              >
                <option value="">Selecciona un pokémon</option>
                {pokemonList.map((pokemon) => (
                  <option key={pokemon.id} value={pokemon.id}>
                    {pokemon.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Parent 2</label>
              <select
                className="form-select"
                value={parent2}
                onChange={(e) => setParent2(e.target.value)}
                required
              >
                <option value="">Selecciona un pokémon</option>
                {pokemonList.map((pokemon) => (
                  <option key={pokemon.id} value={pokemon.id}>
                    {pokemon.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Baby Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Escribe el nombre"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Creando..." : "Hatch Pokemon"}
            </button>
          </form>

          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
      </div>

      <PokemonResult pokemon={result} />
    </>
  );
}
import { useMemo, useState } from "react";
import SearchBar from "../../components/Search";
import PokemonList from "../../components/PokemonList";
import { fetchPokemonDetail, fetchPokemonList } from "../../Services/pokemo_service";

export default function Home() {
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLoad = async () => {
    try {
      setError("");
      setLoading(true);

      // 1) lista
      const data = await fetchPokemonList(50, 0);

      // 2) detalles (para imagen, tipos, id, etc.)
      const details = await Promise.all(
        data.results.map((p) => fetchPokemonDetail(p.url))
      );

      setPokemons(details);
    } catch (e) {
      setError(e.message || "Ocurrió un error");
    } finally {
      setLoading(false);
    }
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return pokemons;
    return pokemons.filter((p) => p.name.toLowerCase().includes(q));
  }, [pokemons, query]);

  return (
    <div className="container py-4">
      <div className="d-flex flex-column flex-md-row gap-2 align-items-stretch align-items-md-center mb-3">
        <button className="btn btn-primary" onClick={handleLoad} disabled={loading}>
          {loading ? "Cargando..." : "Cargar Pokémons"}
        </button>

        <div className="flex-grow-1">
          <SearchBar value={query} onChange={setQuery} />
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <PokemonList items={filtered} loading={loading} />
    </div>
  );
}
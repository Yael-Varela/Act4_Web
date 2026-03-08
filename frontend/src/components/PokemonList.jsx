import PokemonCard from "./PokemónCard";

export default function PokemonList({ items, loading }) {
  if (loading) return <div className="alert alert-info">Cargando...</div>;
  if (!items.length) return <div className="alert alert-secondary">No hay resultados.</div>;

  return (
    <div className="row g-3">
      {items.map((p) => (
        <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <PokemonCard pokemon={p} />
        </div>
      ))}
    </div>
  );
}
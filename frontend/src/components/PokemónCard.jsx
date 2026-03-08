export default function PokemonCard({ pokemon }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={pokemon.sprites?.front_default}
        className="card-img-top p-3"
        alt={pokemon.name}
        style={{ objectFit: "contain", height: 140 }}
      />
      <div className="card-body">
        <h5 className="card-title text-capitalize mb-1">{pokemon.name}</h5>
        <div className="text-muted small">
          #{String(pokemon.id).padStart(3, "0")}
        </div>
      </div>
      <div className="card-footer bg-white">
        <div className="d-flex gap-2 flex-wrap">
          {pokemon.types?.map((t) => (
            <span key={t.type.name} className="badge text-bg-secondary text-capitalize">
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
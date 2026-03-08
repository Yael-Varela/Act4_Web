export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="form-control"
      placeholder="Buscar por nombre (ej. pikachu)"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
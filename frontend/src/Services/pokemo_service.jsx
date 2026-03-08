const API_BASE = "https://pokeapi.co/api/v2/";

export async function fetchPokemonList(limit = 50, offset = 0) {
  const res = await fetch(`${API_BASE}/pokemon?limit=${limit}&offset=${offset}`);
  if (!res.ok) throw new Error("Error al obtener lista de pokémon");
  return res.json(); // { results: [{name, url}], ... }
}

export async function fetchPokemonDetail(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al obtener detalle del pokémon");
  return res.json();
}
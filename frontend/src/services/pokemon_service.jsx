const API_URL = "http://localhost:8080";

export async function getAllPokemon() {
  const response = await fetch(`${API_URL}/pokemon`);

  if (!response.ok) {
    throw new Error("No se pudieron obtener los pokémon");
  }

  return response.json();
}

export async function hatchPokemon(parent1, parent2, name) {
  const params = new URLSearchParams({
    parent1,
    parent2,
    name,
  });

  const response = await fetch(`${API_URL}/pokemon/hatch?${params.toString()}`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("No se pudo crear el pokémon");
  }

  return response.json();
}

export function getPokemonImageUrl(pokedexId) {
  return `${API_URL}/pokemon_image/${pokedexId}`;
}
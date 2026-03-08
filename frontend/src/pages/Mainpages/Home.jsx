import PokemonForm from "../../components/PokemonForm";

export default function Home() {
  return (
    <main className="container py-4">
      <h1 className="mb-4 text-center">Pokemon Breeding App</h1>
      <PokemonForm />
    </main>
  );
}
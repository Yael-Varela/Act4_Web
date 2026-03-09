package com.example102.demo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.stereotype.Service;

import com.example102.demo.models.Pokemon;

@Service
public class PokemonService {

    private final List<Pokemon> pokemonList = new ArrayList<>();
    private final Random random = new Random();

    public PokemonService() {
        pokemonList.add(new Pokemon("Bulbasaur", "timid", "citrus berry",1, 45, 49, 45, 45));
        pokemonList.add(new Pokemon("Charmander", "jolly","leftovers",4, 52, 43, 65, 39));
        pokemonList.add(new Pokemon("Squirtle","bold", "xayah berry",7, 48, 65, 43, 44));
        pokemonList.add(new Pokemon("Pikachu", "emo", "zoom lens",25, 55, 40, 90, 35));
    }

    public List<Pokemon> getAllPokemon() {
        return pokemonList;
    }

    public Pokemon hatchPokemon(String parent1Id, String parent2Id, String name, String item, String nature) {

        Pokemon p1 = findById(parent1Id);
        Pokemon p2 = findById(parent2Id);

        if (p1 == null || p2 == null) {
            throw new RuntimeException("Parent not found");
        }

        int attack = evolveStat(p1.getAttack(), p2.getAttack());
        int defense = evolveStat(p1.getDefense(), p2.getDefense());
        int speed = evolveStat(p1.getSpeed(), p2.getSpeed());
        int hp = evolveStat(p1.getHp(), p2.getHp());


        int randomPokedexId = ThreadLocalRandom.current().nextInt(0, 11);
        Pokemon baby = new Pokemon(name, nature, item, randomPokedexId, attack, defense, speed, hp);
        pokemonList.add(baby);
        return baby;
    }

    private int evolveStat(int stat1, int stat2) {
        int average = (stat1 + stat2) / 2;
        int mutation = random.nextInt(11) - 5;
        return Math.max(1, average + mutation);
    }

    private Pokemon findById(String id) {
        return pokemonList.stream()
                .filter(p -> p.getId().equals(id))
                .findFirst()
                .orElse(null);
    }
}
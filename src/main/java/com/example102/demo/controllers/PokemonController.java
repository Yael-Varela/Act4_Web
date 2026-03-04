package com.example102.demo.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example102.demo.models.Pokemon;
import com.example102.demo.services.PokemonService;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {

    private final PokemonService service;

    public PokemonController(PokemonService service) {
        this.service = service;
    }

    @GetMapping
    public List<Pokemon> getAll() {
        return service.getAllPokemon();
    }

    @PostMapping("/hatch")
    public Pokemon hatch(
            @RequestParam String parent1,
            @RequestParam String parent2,
            @RequestParam String name) {

        return service.hatchPokemon(parent1, parent2, name);
    }
}
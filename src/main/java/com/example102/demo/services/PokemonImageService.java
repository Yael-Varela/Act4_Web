package com.example102.demo.services;

import java.io.IOException;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

@Service
public class PokemonImageService {

    public Resource getPokemonImage(int pokedexId) throws IOException {
        String path = "static/pokemon/" + pokedexId + ".png";

        ClassPathResource imgFile = new ClassPathResource(path);

        if (!imgFile.exists()) {
            throw new IOException("Image not found");
        }

        return imgFile;
    }
}
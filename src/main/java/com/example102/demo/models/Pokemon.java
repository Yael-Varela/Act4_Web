package com.example102.demo.models;

import java.util.UUID;

public class Pokemon {

    final private String id;
    final private String name;
    final private String nature;
    final private String item;
    final private int attack;
    final private int pokedexId;
    final private int defense;
    final private int speed;
    final private int hp;

    public Pokemon(String name, String nature, String item, int pokedexId, int attack, int defense, int speed, int hp) {
        this.id = UUID.randomUUID().toString();
        this.name = name;
        this.nature = nature;
        this.item = item;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.hp = hp;
        this.pokedexId = pokedexId;
    }

    public String getId() { return id; }
    public String getName() { return name; }
    public String getNature(){return nature;}
    public String getItem(){return item;}
    public int getAttack() { return attack;}
    public int getDefense() { return defense; }
    public int getSpeed() { return speed; }
    public int getHp() { return hp; }
    public int getPokedexId() { return pokedexId; }
}
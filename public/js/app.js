"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const contenedor = document.querySelector("#app");
const btnMas = document.querySelector("#mostrar-mas");
const btnVolver = document.querySelector("#volver");
let pokemons = 20;
const getPokemon = () => __awaiter(void 0, void 0, void 0, function* () {
    const listaPokemon = new Array;
    for (let i = (pokemons - 19); i <= pokemons; i++) {
        const getDatos = yield fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const datosPokemon = yield getDatos.json();
        const pokemonTipo = datosPokemon.types.map((poke) => poke.type.name).join(", ");
        let pokemon = new Pokemon(datosPokemon.id, datosPokemon.name, `${datosPokemon.sprites.front_default}`, pokemonTipo);
        listaPokemon.push(pokemon);
    }
    listaPokemon.forEach((element) => {
        element.mostrarPokemon();
    });
});
const verMasPokemons = (e) => {
    //TODO: agarrar el id del ultimo elemento, asignarle ese valor a pokemon y despues sumarle 100 
    pokemons += 20;
    getPokemon();
};
btnMas === null || btnMas === void 0 ? void 0 : btnMas.addEventListener("click", verMasPokemons);
getPokemon();

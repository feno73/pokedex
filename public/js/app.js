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
let pokemons = 100;
const fetchDatos = () => {
    for (let i = (pokemons - 99); i <= pokemons; i++) {
        getPokemon(i);
    }
};
const getPokemon = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const datos = yield fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const datosPokemon = yield datos.json();
    const pokemonTipo = datosPokemon.types.map((poke) => poke.type.name).join(", ");
    let pokemon = new Pokemon(datosPokemon.id, datosPokemon.name, `${datosPokemon.sprites.front_default}`, pokemonTipo);
    pokemon.mostrarPokemon();
});
const verMasPokemons = (e) => {
    //TODO: agarrar el id del ultimo elemento, asignarle ese valor a pokemon y despues sumarle 100 
    pokemons += 100;
    fetchDatos();
};
btnMas === null || btnMas === void 0 ? void 0 : btnMas.addEventListener("click", verMasPokemons);
fetchDatos();

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
const contenedor = document.getElementById("app");
const pokemons = 100;
const fetchDatos = () => {
    for (let i = 1; i <= pokemons; i++) {
        getPokemon(i);
    }
};
const getPokemon = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const datos = yield fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = yield datos.json();
    const pokemonTipo = pokemon.types.map((poke) => poke.type.name).join(", ");
    const transformarPokemon = {
        id: pokemon.id,
        nombre: pokemon.name,
        imagen: `${pokemon.sprites.front_default}`,
        tipo: pokemonTipo,
    };
    mostrarPokemon(transformarPokemon);
});
const mostrarPokemon = (pokemon) => {
    let salida = `
        <div class="card">
            <span class="card--id">#${pokemon.id}</span>
            <img class="card--image" src=${pokemon.imagen} alt="${pokemon.nombre} />
            <h1 class="card--name">${pokemon.nombre}</h1>
            <span class="card--details">${pokemon.tipo}</span>
        </div>
    `;
    contenedor.innerHTML += salida;
};
fetchDatos();

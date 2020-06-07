"use strict";
const contenedor = document.querySelector("#app");
const btnMas = document.querySelector("#mostrar-mas");
const btnVolver = document.querySelector("#volver");
let pokemons = 20;
// Comportamiento de los botones
const verMasPokemons = (e) => {
    //TODO: agarrar el id del ultimo elemento, asignarle ese valor a pokemon y despues sumarle 100 
    pokemons += 20;
    Pokemon.getPokemon(pokemons);
};
const recargar = (e) => window.location.reload();
btnMas === null || btnMas === void 0 ? void 0 : btnMas.addEventListener("click", verMasPokemons);
btnVolver === null || btnVolver === void 0 ? void 0 : btnVolver.addEventListener("click", recargar);
// Carga lista inicial
Pokemon.getPokemon(pokemons);

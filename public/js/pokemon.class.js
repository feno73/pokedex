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
class Pokemon {
    constructor(id, n, i, t, h, m, e, p) {
        this.estado = false;
        this.id = id;
        this.nombre = n;
        this.imagen = i;
        this.tipo = t;
        this.habilidades = h;
        this.movimientos = m;
        this.estadisticas = e;
        this.peso = p;
        this.vDOM = document.createElement("div");
    }
    mostrarPokemon() {
        var _a;
        this.vDOM.classList.add("card");
        this.vDOM.innerHTML = `
            <span class="card--id">#${this.id}</span>
            <img class="card--image" src=${this.imagen} alt="${this.nombre}" />
            <h1 class="card--name">${this.nombre}</h1>
            <span class="card--details">${this.tipo}</span>
        `;
        if (!this.estado) { //<-- Valida si el elemento esta en la interfaz
            contenedor.appendChild(this.vDOM);
            this.estado = true;
        }
        const verDetalle = (e) => {
            this.vDOM.classList.remove("card");
            this.vDOM.classList.add("detalle");
            this.vDOM.innerHTML = `
                <span class="det--id">#${this.id}</span>
                <img class="det--image" src=${this.imagen} alt="${this.nombre}" />
                <h1 class="det--name">${this.nombre}</h1>
                <span class="det--type">Tipo: ${this.tipo}</span>
                <span class="det--abilities">Habilidades: ${this.habilidades.map((h) => h).join(", ")}</span>
                <span class="det--moves">Movimientos: ${this.movimientos.map((m) => m).join(", ")}</span>
                <span class="det--stats">HP: ${this.estadisticas[0].base_stat}</span>
                <span class="det--stats">Ataque: ${this.estadisticas[1].base_stat}</span>
                <span class="det--stats">Defensa: ${this.estadisticas[2].base_stat}</span>
                <span class="det--stats">Velocidad: ${this.estadisticas[5].base_stat}</span>
                <span class="det--stats">Peso: ${this.peso}Kg</span>
            `;
            // 
            contenedor.innerHTML = "";
            contenedor.appendChild(this.vDOM);
            btnMas.classList.add("d-none");
            btnVolver.classList.remove("d-none");
        };
        (_a = this.vDOM) === null || _a === void 0 ? void 0 : _a.addEventListener("click", verDetalle);
    }
}
Pokemon.getPokemon = (indice) => __awaiter(void 0, void 0, void 0, function* () {
    const listaPokemon = new Array;
    for (let i = (indice - 19); i <= indice; i++) {
        const getDatos = yield fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const datosPokemon = yield getDatos.json();
        const pokeTipo = datosPokemon.types.map((poke) => poke.type.name);
        const pokeHabilidades = datosPokemon.abilities.map((poke) => poke.ability.name);
        const pokeMovimientos = datosPokemon.moves.map((poke) => poke.move.name);
        const pokeEstadisticas = datosPokemon.stats;
        let pokemon = new Pokemon(datosPokemon.id, datosPokemon.name, `${datosPokemon.sprites.front_default}`, pokeTipo, pokeHabilidades, pokeMovimientos, pokeEstadisticas, datosPokemon.weight);
        listaPokemon.push(pokemon);
    }
    listaPokemon.forEach((element) => {
        element.mostrarPokemon();
    });
});

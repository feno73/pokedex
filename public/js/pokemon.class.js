"use strict";
class Pokemon {
    constructor(id, n, i, t) {
        this.estado = false;
        this.id = id;
        this.nombre = n;
        this.imagen = i;
        this.tipo = t;
        this.vDOM = document.createElement("div");
    }
    mostrarPokemon() {
        var _a;
        this.vDOM.classList.add("card");
        this.vDOM.innerHTML = `
            <span class="card--id">${this.id}</span>
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
                <span class="detalle--id">${this.id}</span>
                <img class="detalle--image" src=${this.imagen} alt="${this.nombre}" />
                <h1 class="detalle--name">${this.nombre}</h1>
                <span class="detalle--details">${this.tipo}</span>
            `;
            contenedor.innerHTML = "";
            contenedor.appendChild(this.vDOM);
            btnMas.classList.add("d-none");
            btnVolver.classList.remove("d-none");
        };
        (_a = this.vDOM) === null || _a === void 0 ? void 0 : _a.addEventListener("click", verDetalle);
    }
}

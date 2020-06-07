const contenedor: HTMLElement | any = document.querySelector("#app")
const btnMas: HTMLElement | any = document.querySelector("#mostrar-mas")
const btnVolver: HTMLElement | any = document.querySelector("#volver")
let pokemons: number = 20

// Comportamiento de los botones
const verMasPokemons = (e: MouseEvent):void => {
    //TODO: agarrar el id del ultimo elemento, asignarle ese valor a pokemon y despues sumarle 100 
    pokemons += 20
    Pokemon.getPokemon(pokemons)
}

const recargar = (e: MouseEvent):void => window.location.reload()

btnMas?.addEventListener("click", verMasPokemons);
btnVolver?.addEventListener("click", recargar)

// Carga lista inicial
Pokemon.getPokemon(pokemons)
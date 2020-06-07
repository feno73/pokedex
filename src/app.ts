const contenedor: HTMLElement | any = document.querySelector("#app")
const btnMas: HTMLElement | any = document.querySelector("#mostrar-mas")
let pokemons: number = 100


const fetchDatos = (): void => {
    for (let i = (pokemons - 99); i <= pokemons; i++) {
        getPokemon(i)
        
    }
}

const getPokemon = async (id: number): Promise<void> => {
    const datos: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const datosPokemon: any = await datos.json()
    const pokemonTipo: string = datosPokemon.types.map((poke: any) => poke.type.name).join(", ")

    let pokemon = new Pokemon (datosPokemon.id, datosPokemon.name, `${datosPokemon.sprites.front_default}`, pokemonTipo)
    pokemon.mostrarPokemon()
}


const verMasPokemons = (e: MouseEvent):void => {
    //TODO: agarrar el id del ultimo elemento, asignarle ese valor a pokemon y despues sumarle 100 
    pokemons += 100
    fetchDatos()
}
btnMas?.addEventListener("click", verMasPokemons);


fetchDatos()
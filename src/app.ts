const contenedor: HTMLElement | any = document.querySelector("#app")
const btnMas: HTMLElement | any = document.querySelector("#mostrar-mas")
const btnVolver: HTMLElement | any = document.querySelector("#volver")
let pokemons: number = 20


const getPokemon = async (): Promise<void> => {
    const listaPokemon: any = new Array
    for (let i = (pokemons - 19); i <= pokemons; i++) {
        const getDatos: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const datosPokemon: any = await getDatos.json()
        const pokemonTipo: string = datosPokemon.types.map((poke: any) => poke.type.name).join(", ")
        let pokemon = new Pokemon (datosPokemon.id, datosPokemon.name, `${datosPokemon.sprites.front_default}`, pokemonTipo)
        listaPokemon.push(pokemon)
    }
    
    listaPokemon.forEach((element: any) => {
        element.mostrarPokemon()
    });
    
}



const verMasPokemons = (e: MouseEvent):void => {
    //TODO: agarrar el id del ultimo elemento, asignarle ese valor a pokemon y despues sumarle 100 
    pokemons += 20
    getPokemon()
}
btnMas?.addEventListener("click", verMasPokemons);


getPokemon()
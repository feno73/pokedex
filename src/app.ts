const contenedor: HTMLElement | any = document.getElementById("app")
const pokemons: number = 100

interface IPokemon {
    id: number;
    nombre: string;
    imagen: string;
    tipo: string;
}

const fetchDatos = (): void => {
    for (let i = 1; i <= pokemons; i++) {
        getPokemon(i)
        
    }
}

const getPokemon = async (id: number): Promise<void> => {
    const datos: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon: any = await datos.json()
    const pokemonTipo: string = pokemon.types.map((poke: any) => poke.type.name).join(", ")

    const transformarPokemon = {
        id: pokemon.id,
        nombre: pokemon.name,
        imagen: `${pokemon.sprites.front_default}`,
        tipo: pokemonTipo,
    }

    mostrarPokemon(transformarPokemon)
}

const mostrarPokemon = (pokemon: IPokemon): void => {
    let salida: string = `
        <div class="card">
            <span class="card--id">#${pokemon.id}</span>
            <img class="card--image" src=${pokemon.imagen} alt="${pokemon.nombre} />
            <h1 class="card--name">${pokemon.nombre}</h1>
            <span class="card--details">${pokemon.tipo}</span>
        </div>
    `
    contenedor.innerHTML += salida
}

fetchDatos()
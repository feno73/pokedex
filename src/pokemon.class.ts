class Pokemon {
    id:number;
    nombre: string;
    imagen: string;
    tipo: string[];
    habilidades: string[];
    movimientos: string[];
    estadisticas: any;
    peso: number;
    estado: boolean = false;
    vDOM: HTMLElement;

    constructor(id: number, n: string, i: string, t: string[], h: string[], m: string[], e: any, p: number){
        this.id = id
        this.nombre = n
        this.imagen = i
        this.tipo = t
        this.habilidades = h
        this.movimientos = m
        this.estadisticas = e
        this.peso = p
        this.vDOM = document.createElement("div")
    }
    static getPokemon = async (indice: number): Promise<void> => {
        const listaPokemon: any = new Array
        for (let i = (indice - 19); i <= indice; i++) {
            const getDatos: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            const datosPokemon: any = await getDatos.json()

            const pokeTipo: string[] = datosPokemon.types.map((poke: any) => poke.type.name)
            const pokeHabilidades: string[] = datosPokemon.abilities.map((poke: any) => poke.ability.name)
            const pokeMovimientos: string[] = datosPokemon.moves.map((poke: any) => poke.move.name)
            const pokeEstadisticas: any = datosPokemon.stats

            
            let pokemon = new Pokemon (datosPokemon.id, datosPokemon.name, `${datosPokemon.sprites.front_default}`, pokeTipo, pokeHabilidades, pokeMovimientos, pokeEstadisticas, datosPokemon.weight)
            listaPokemon.push(pokemon)
        }
        
        listaPokemon.forEach((element: any) => {
            element.mostrarPokemon()
        });
        
    }
    
    mostrarPokemon(): any {
        this.vDOM.classList.add("card")
        this.vDOM.innerHTML = `
            <span class="card--id">#${this.id}</span>
            <img class="card--image" src=${this.imagen} alt="${this.nombre}" />
            <h1 class="card--name">${this.nombre}</h1>
            <span class="card--details">${this.tipo}</span>
        `
        if(!this.estado){ //<-- Valida si el elemento esta en la interfaz
            contenedor.appendChild(this.vDOM)
            this.estado = true
        }

        const verDetalle = (e: MouseEvent):void => {
            this.vDOM.classList.remove("card")
            this.vDOM.classList.add("detalle")
            this.vDOM.innerHTML = `
                <span class="det--id">#${this.id}</span>
                <img class="det--image" src=${this.imagen} alt="${this.nombre}" />
                <h1 class="det--name">${this.nombre}</h1>
                <span class="det--type">Tipo: ${this.tipo}</span>
                <span class="det--abilities">Habilidades: ${this.habilidades.map((h: string) => h).join(", ")}</span>
                <span class="det--moves">Movimientos: ${this.movimientos.map((m: string) => m).join(", ")}</span>
                <span class="det--stats">HP: ${this.estadisticas[0].base_stat}</span>
                <span class="det--stats">Ataque: ${this.estadisticas[1].base_stat}</span>
                <span class="det--stats">Defensa: ${this.estadisticas[2].base_stat}</span>
                <span class="det--stats">Velocidad: ${this.estadisticas[5].base_stat}</span>
                <span class="det--stats">Peso: ${this.peso}Kg</span>
            `
            // 
            contenedor.innerHTML = ""
            contenedor.appendChild(this.vDOM)
            btnMas.classList.add("d-none")
            btnVolver.classList.remove("d-none")
        }
        this.vDOM?.addEventListener("click", verDetalle);
    }
}

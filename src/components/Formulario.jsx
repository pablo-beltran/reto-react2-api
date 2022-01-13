import React from 'react'
import { useState, useEffect } from 'react'
import PokeCardsConteiner from './PokeCardsConteiner'

const Formulario = () => {

    const [allRegionPokemon, setAllRegionPokemon] = useState([])
    const [allPokedex, setAllPokedex] = useState([''])
    const [allPokemons, setAllPokemons] = useState([])
    const [currentPokemons, setCurrentPokemons] = useState([])
    const [numPokeCards, setNumPokeCards] = useState({"start":0, "end": 9})
    
    const getRegionPokemon = async () => {
        const resRegion = await fetch('https://pokeapi.co/api/v2/region')
        const dataRegion = await resRegion.json()
        setAllRegionPokemon(dataRegion.results)
    }

    const handleRegionSelect = (e) => {
        const auxRegion = e.target.value
        console.log(auxRegion)

        const getPokedexes = async (regionLink) => {
            const resPokedex = await fetch(regionLink)
            const dataPokedex = await resPokedex.json()
            setAllPokedex(dataPokedex.pokedexes)
        }

        getPokedexes(auxRegion)
        
    }

    const handlePokedexSelect = (e) =>{
        const auxPokedex = e.target.value
        console.log(auxPokedex)  

        const getPokemons = async (PokemonsLink) => {
            const resPokemon = await fetch(PokemonsLink)
            const dataPokemon = await resPokemon.json()
            setAllPokemons(dataPokemon.pokemon_entries)
        }

        getPokemons(auxPokedex)
    }

    const handleSubmitForm = (e) =>{
        e.preventDefault()

        if(allPokemons.length > 0){
            setNumPokeCards({"start":numPokeCards.end, "end": numPokeCards.end+9})
            const pokemons = allPokemons.slice(numPokeCards.start, numPokeCards.end)
            const currentPokeInfo = []

            pokemons.forEach(pokemon => {
                const pokeLink = "https://pokeapi.co/api/v2/pokemon/"+pokemon.pokemon_species.name
                const getPokemons = async (pokeLink) => {
                    const resPokeInfo = await fetch(pokeLink)
                    const dataPokeInfo = await resPokeInfo.json()
                    currentPokeInfo.push(dataPokeInfo)
                }
                getPokemons(pokeLink)
            })
            
            setCurrentPokemons(currentPokeInfo)
            console.log('formulario')
            console.log(currentPokemons)
        }
    }
    
    useEffect(() => {
        getRegionPokemon()
    }, [])

    useEffect(() => {
        setAllPokemons('')
    }, [allPokedex])

    return (
        <div className="md:w-1/2 lg:w-3/5  bg-gray-500">
            <form action="" className=''>
                <select className='block mt-2 ml-2' name="regions" defaultValue={1} onChange={handleRegionSelect} id="idRegions">
                    <option value="1">selecciona una region</option>
                    {
                        allRegionPokemon.map((region, i) =>{
                        return (
                            <option value={region.url} key={region.name + i}> {region.name} </option>
                        )
                    })}
                </select>
                <select className='block mt-2 ml-2' onChange={handlePokedexSelect} name="" id="">
                    <option value="">Selecciona una pekedex</option>
                    {
                            allPokedex.map( (pokedex, i) => {
                                return(
                                    <option value={pokedex.url} key={pokedex.name + i} > {pokedex.name}</option>
                                )
                            })
                    }
                </select>
                <button
                    onClick={handleSubmitForm}
                    className='bg-red-600 m-2 p-2' 
                >
                    {currentPokemons.length === 0 ? "cargar pokedex" : "cargar siguientes 10"}
                </button>
            </form>

            <PokeCardsConteiner
                currentPokemons = {currentPokemons}
            />

        </div>
    )
}

export default Formulario

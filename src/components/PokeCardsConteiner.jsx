import React from 'react'
import { useEffect } from 'react'

const PokeCardsConteiner = ({currentPokemons}) => {

    // useEffect( () => {
    //     console.log('useEffect')
    //     console.log(currentPokemons)
    //     const printPoke = () => {
    //         currentPokemons.map( (pokemon) =>{
    //             const pokeName = pokemon.name
    //             console.log(pokeName)
    //         })
    //     }
        
    //     printPoke()

    // }, [currentPokemons])
    
    console.log('pokeCardsConteiner')
    console.log(currentPokemons)

    return (
        <div className='grid grid-cols-4 gap-4'>
            
        </div>
    )
}

export default PokeCardsConteiner


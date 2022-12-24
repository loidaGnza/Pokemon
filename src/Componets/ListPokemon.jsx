import React from 'react'
import PokemonCard from './PokemonCard'
import"./styles/listPokemon.css"

const ListPokemon = ({pokemons}) => {
  
  return (
    <section className='listPokemon'>
{
  pokemons.map((pokemon) => <PokemonCard key={pokemon.url} pokemon={pokemon}/>)
}
    </section>
  )
}

export default ListPokemon
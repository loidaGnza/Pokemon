import React from 'react'
import PokemonCard from './PokemonCard'
import"./styles/ListPokemon.css"

const ListPokemon = ({pokemons}) => {
  return (
    <section className='listPokemons'>
{
  pokemons.map((pokemon) => <PokemonCard key={pokemon.url} pokemon={pokemon}/>)
}
    </section>
  )
}

export default ListPokemon
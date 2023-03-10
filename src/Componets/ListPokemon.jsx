import React from 'react'
import PokemonCard from './PokemonCard'
import '../Componets/styles/ListPokemon.css'

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
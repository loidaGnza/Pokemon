import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ListPokemon from '../Componets/ListPokemon'
import { paginationalLogic } from '../helpers/paginationalLogic'
import "./styles/Pokedex.css"

const Pokedex = () => {
const [pokemons, setPokemons] = useState([])
const [pokemonsFilter, setPokemonsFilter] = useState([])
const [types, setTypes] = useState([])
const [namePokemons, setNamePokemons] = useState('')
const [pokemonType, setPokemonType] = useState('')
const [currentpage, setCurrentpage] = useState(1)


const nameTrainer = useSelector(state => state.nameTrainer)

const handleSubmit = (e) => {
  e.preventDefault()
  const name = e.target.namePokemons.value
setNamePokemons(name)
}

const handleChangeSelect = (e) =>{
  setPokemonType(e.target.value)
}

const {lastPage, pageInBlock,pokemonsInPage} =paginationalLogic(currentpage,pokemonsFilter)

const handleClickPage = () =>{
  setCurrentpage(newpage)
}

const handleNextPage = () =>{
  const newPage = currentpage +1
  if(newPage > lastPage){
    setCurrentpage(1)
  }else{
    setCurrentpage(newPage)
  }
}

const handlePreviousPage = () =>{
  const newPage = currentpage -1
  if(newPage <1){
    setCurrentpage(lastPage)
  }else{
    setCurrentpage(newPage)
  }
}

const handleFirstPage = () =>{
  setCurrentpage(1)
}


const handleLastPage = () =>{
  setCurrentpage(lastPage)
}

useEffect(() => {
const URL =`https://pokeapi.co/api/v2/${pokemonType ?  `type/${pokemonType}/`: 'pokemon/?limit=20'}`
axios.get(URL)
.then(res => {
 if(pokemonType){
  const newPokemons = res.data.pokemon.map(pokemon => pokemon.pokemon)
setPokemons(newPokemons)
}else{
  setPokemons(res.data.results)
}
} )
.catch(error => console.log(error))
}, [pokemonType])


useEffect(() => {
  const Url='https://pokeapi.co/api/v2/type/'
  axios.get(Url)
  .then(res => setTypes(res.data.results))
.catch(error => console.log(error))
}, [])




useEffect(() => {
const newPokemons= pokemons.filter(pokemon => pokemon.name.includes(namePokemons))
setPokemonsFilter(newPokemons)
}, [namePokemons,pokemons])


  return (
  <main>
    <header className='pokedex__header'>
  <h1>Pokedex</h1>
  <p>Welcome<span> {nameTrainer}</span>, here you can find your favorite pokemon</p>
  <form onSubmit={handleSubmit} className='pokedex__form'></form>
  <div className='pokedex__search'>
    <input className='pokedex__input' type='text' id='namePokemon' />
    <button className='pokedex__btn' type='submit'>Search</button>
    </div>
    <select  onChange={handleChangeSelect} className='pokedex__select'>
      <option>All Pokemons</option>
      {
        types.map(type => <option value={type.name} key={type.url}>{type.name}</option>)
      }
    </select>
    </header>
    <ListPokemon pokemons={pokemonsInPage}/>
    <ul className='pokedex__lis-pages'>
      <li onClick={handlePreviousPage}>{'<'}</li>
      <li onClick={handleFirstPage}>...</li>
      {
        pageInBlock.map(pageInBlock => <li className={currentpage === pageInBlock ?'actualPage' : ''} onClick={() => handleClickPage(pageInBlock)} key={pageInBlock}>{pageInBlock}</li>)
      }
      <li onClick={handleLastPage}>...</li>
      <li onClick={handleNextPage}>{'>'}</li>
    </ul>
  </main>


  )
}

export default Pokedex
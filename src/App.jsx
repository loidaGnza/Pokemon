import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import Pokemon from './pages/Pokemon'
import RouteProtected from './Componets/RouteProtected'
import HomeProtected from './Componets/HomeProtected'
import Footer from './Layout/footer'
import { useSelector } from 'react-redux'

function App() {
  const nameTrainer = useSelector(state => state.nameTrainer)

  useEffect(() => {
    localStorage.setItem('nameTrainer', nameTrainer)
  
  }, [nameTrainer])
  
  return (
    <div className="App">
      <Routes>

        <Route element={<HomeProtected/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
    


<Route element={<RouteProtected/>}>
        <Route path='/pokedex' element={<Pokedex/>}/>
        <Route path='/pokedex/:id' element={<Pokemon/>}/>
        </Route>
      </Routes>
    <Footer/>
    </div>
  )
}

export default App

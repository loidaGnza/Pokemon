import React from 'react'
import FormHome from '../Componets/FormHome'
import "./styles/Home.css"
const Home = () => {
  return (
    <main className='home'>
        <img className='home__img' src="/img/imageT.png" alt=''/>
        <h2 className='home__subtitle'>Hi, trainer</h2>
        <p className='home__text'>Give me your name to star!</p>
      <FormHome/>
    </main>
  )
}

export default Home
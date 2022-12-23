import React from 'react'
import "./style/Header.css"
const Header = () => {
  return (

  <header className='header'>
    <img  className='header__img' src='/img/imageT.png'/>
      <div className='header__black'> </div>
      <div className='header__circle'>
        <div className='header__circle-int'></div>
      </div>
  
  </header>
    
  )
}

export default Header
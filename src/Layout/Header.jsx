import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import "./style/Header.css"

const Header = () => {
  const dispatch = useDispatch()

const handleClickLogout = () => {
  dispatch(setNameTrainerGlobal(''))
}

  return (

  <header className='header'>
    <img  className='header__img' src='/img/imageT.png'/>
      <div className='header__black'> </div>
      <div className='header__circle'>
        <div className='header__circle-int'></div>

        <div className='header__btn'>
          <i onClick = {handleClickLogout} className='header__logout bx bxs-log-out-circle'></i>
        </div>
      
      </div>
  
  </header>
    
  )
}

export default Header
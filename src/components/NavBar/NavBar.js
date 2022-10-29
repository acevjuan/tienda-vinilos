import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logo.png'
import './style.css'

const NavBar = () => {
  return (
    <header className="nav-bar">
      <div className="nav-bar__brand">
        <img className="nav-bar__brand__logo" src={logo} alt="logo de tienda"></img>
        <div>roygbiv vinyl store</div>
      </div>
      <nav className="nav-bar__menu">
        <ul className="nav-bar__menu__list">
          <li className="nav-bar__menu__list__item"><a href=''>HOME</a></li>
          <li className="nav-bar__menu__list__item"><a href=''>NOVEDADES</a></li>
          <li className="nav-bar__menu__list__item"><a href=''>MÁS VENDIDOS</a></li>
          <li className="nav-bar__menu__list__item"><a href=''>ARTISTAS</a></li>
          <li className="nav-bar__menu__list__item"><a href=''>GÉNEROS</a></li>
          <li className="nav-bar__menu__list__item"><a href=''>NOSTROS</a></li>
          <li className="nav-bar__menu__list__item"><a href=''>CONTACTO</a></li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logo.png'
import './style.css'

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__brand">
        <img className="nav-bar__brand__logo" src={logo} alt="logo de tienda"></img>
      </div>
      <ul className="nav-bar__menu">
        <li className="nav-bar__menu__item">
          <a href=''>Home</a>
        </li>
        <li className="nav-bar__menu__item">
          <a href=''>Novedades</a>
        </li>
        <li className="nav-bar__menu__item">
          <a href=''>Más vendidos</a>
        </li>
        <li className="nav-bar__menu__item">
          <a href=''>Artistas</a>
        </li>
        <li className="nav-bar__menu__item">
          <a href=''>Géneros</a>
        </li>
        <li className="nav-bar__menu__item">
          <a href=''>Nosotros</a>
        </li>
        <li className="nav-bar__menu__item">
          <a href=''>Contacto</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar
import React, { useState } from 'react'
import "./navbar.css"
import { useCustomContext } from "../../ContextManager/ContexProvider"
import logo from "../../assets/Img/Ellipse 1.png"
import home from "../../assets/Img/Vector (3).png"
import lupa from "../../assets/Img/Icon.png"
import carro from "../../assets/Img/shopping_cart.png"
import { NavLink } from 'react-router-dom'


const NavBar = ({ onSearch }) => {
  const { productos } = useCustomContext()
  const [buscar, setBuscar] = useState("")
  return (
    <>
      <div className='navbar'>
        <div className='info'>
          <img src={logo} />
          <h4 className='ocultar z'>Your brand</h4>
        </div>
        <input type="text" className='Buscador ocultar z' placeholder='🎇   Search Goods...' value={buscar} onChange={(evento) => { setBuscar(evento.target.value); onSearch(evento.target.value) }} />

        <div className='info' >
          <NavLink to={'/formulario'} className="z">Contacto</NavLink>
          <img className="ocultarlupa z" src={lupa} />
          <nav className='info' >
            <NavLink to={"/cart"} className="z" ><img src={carro} /></NavLink>
            <NavLink to={"/"} className="z"><img src={home} /></NavLink>
          </nav>
        </div>
      </div>
    </>
  )
}

export default NavBar
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./productCard.css"

const ProductCard = ({ producto }) => {
  return (

      <div className='productCard z'>
      <div className='productoInfo'>
        <NavLink to={"/detail/" + producto.id}>
          <div className='productoInfo'>
          <img className='imagen' src={producto.img} alt="" />
          <p>{producto.categoria}</p>
          <h2>{producto.nombre}</h2>
          <h3>U$D {producto.precio}</h3>
          </div>
        </NavLink>
        </div>
    </div>
  )
}

export default ProductCard
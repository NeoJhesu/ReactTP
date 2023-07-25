import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContexProvider'


const Compra = ({producto}) => {
  const { getTotal } = useCustomContext()

  return (
    <>
    <div className='productCard z'>
    <div className='productoInfo'>
      <NavLink to={"/detail/" + producto.id}>
        <div className='productoInfo'>
        <img className='imagen' src={producto.img} alt="" />
        <p>{producto.categoria}</p>
        <h1>{producto.nombre}</h1>
        <h3>Cantidad {producto.cantidad}</h3>
        </div>
      </NavLink>
      </div>
      </div>

  </>
  )
}

export default Compra
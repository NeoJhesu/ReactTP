import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContexProvider'
import { Contador, NavBar } from '../../Componetes'
import "./DetallesDePagina.css"

const DetailPage = () => {
    const {id} = useParams ()

const {getProductById, isInCart, getProductCartById} = useCustomContext()
const productoDetail = getProductById(id)
const [detealleDeProducto] = useState (isInCart(id) ? (getProductCartById (id)) :  (getProductById(id)) )
  return (
    <>
    <div>
    <NavBar/>
    </div>
    <div className='megacontenedor'>
    <div className='contenedor'>
    <div>
      <h1>{productoDetail.nombre}</h1>
      <h5>{productoDetail.categoria}</h5>
    </div>

    <div className='distribucion'>
    <div className='productCard'>
      <div className='productoInfo'> 
      <img src= {productoDetail.img}/>
      <h2>${productoDetail.precio}</h2>
      </div>
    </div>
    <div className='detalles'>       
        <p>{productoDetail.descripcio}</p>
        <h4>Colors</h4>
        <div className='colores'> 
        <button className='color1'>   </button>
        <button className='color2'>   </button>
        <button className='color3'>   </button>
        </div>
        <div className='colores'>
        <label htmlFor="">Black</label>
        <label htmlFor="">Orange</label>
        <label htmlFor="">Gray</label>
        </div>
        { isInCart (id) 
        ?
         <Contador valorInicial={detealleDeProducto.cantidad} stock={productoDetail.stock} id={productoDetail.id}/> 
        :
        <Contador valorInicial={1} stock={productoDetail.stock} id={productoDetail.id}/>
        }
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default DetailPage
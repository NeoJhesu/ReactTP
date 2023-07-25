import React, { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContexProvider'

const Contador = ({valorInicial, stock, id}) => {
    const {addProductCart} = useCustomContext()
    const [cantidad, setCantidad] = useState (valorInicial)
    return (
        <>
            <div>
                <button className='botonVariable z' onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : cantidad)}>-</button>
                <span>{cantidad}</span>
                <button className='botonVariable z' onClick={() => setCantidad(cantidad === stock ? cantidad: cantidad +1 )}>+</button>
            </div>
            <button className='botonCompra z' onClick={() => {
                addProductCart(id, cantidad)
                alert("Producto agregado al carrito")
            }
        }>Confirmar</button>
        </>
    )
}

export default Contador 
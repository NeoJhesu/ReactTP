import React from "react";
import { useCustomContext } from "../../ContextManager/ContexProvider";
import { Compra, NavBar } from "../../Componetes";
import "./cartpage.css"

const CartPage = () => {
  const { cart, getTotal } = useCustomContext();
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="contenedorcart">
        {cart.map((producto) => (
          <Compra key={producto.id} producto={producto} />
        ))}
      </div>
      <div className="total">
        <p>Total: ${getTotal()}</p>
      <button className='botonCompra z' onClick={() => {
               Swal.fire(
                'Genial',
                'Se realizo con exito!',
                'success'
              )
            }
        }>Confirmar</button>
        </div>
    </>
  );
};

export default CartPage;

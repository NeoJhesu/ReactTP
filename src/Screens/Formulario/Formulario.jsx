import React, { useState } from 'react'
import { NavBar } from '../../Componetes'
import "./Formulario.css"

const Formulario = () => {

    const [formUserData, setformUserData] = useState({
        nombre: "",
        asunto: "",
        email: "",
        mensaje: "",
    })


    const [personalData, setpersonalData] = useState(false)

    const handleRegisterUser = (evento) => {
        evento.preventDefault()
        setpersonalData(true)
    }


    const handleChangeRegisterUser = (evento) => {
        setformUserData({ ...formUserData, [evento.target.name]: evento.target.value })
    }
    return (
        <>
            <NavBar />
            <form className='formulario' onSubmit={handleRegisterUser}>
                <div className='datos'>
                    <h2>Contact</h2>
                    <label htmlFor="nombre">Full Name*</label>
                    <input className='tamañoInput' type="text" placeholder='Ingrese el nombre' name='nombre' id='nombre'required onChange={handleChangeRegisterUser} value={formUserData.nombre} />
                    <label htmlFor="Asunto">Affair*</label>
                    <input className='tamañoInput' type="text" placeholder='Indrese el apéllido' name='asunto' id='asunto' required onChange={handleChangeRegisterUser} value={formUserData.apellido} />
                    <label htmlFor="Email">Email*</label>
                    <input className='tamañoInput' type="email" placeholder='Ejemplo@ejemplo.com' name='email' id='email' required onChange={handleChangeRegisterUser} value={formUserData.email} />
                    <textarea className='botonFormulario' name="mensaje" id="mensaje" cols="20" rows="10" placeholder='Escriba su mensaje'></textarea>
                    <div className='botonFormulario'>
                        {formUserData.nombre.length >4 && <button className='botonCompra z' type='submit'>Send</button>}
                    </div>
                </div>
            </form>
            <div className='mensajeDeEnvio'>
            {personalData && <span style={{ color: "green", fontWeight: 500 }} >Los datos se enviaron con exito</span>}
            </div>
        </>
    )
}

export default Formulario
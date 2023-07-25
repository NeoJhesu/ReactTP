import React, {useState} from 'react'
import "./App.css"
import { CartPage, DetailPage, HomePage } from './Screens/Index'
import { Route, Routes } from 'react-router-dom'
import Formulario from './Screens/Formulario/Formulario'

const App = () => {
  return (
    <>
    <div>
      <Routes>
        <Route path='/formulario' element ={<Formulario/>} />
        <Route path='/' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
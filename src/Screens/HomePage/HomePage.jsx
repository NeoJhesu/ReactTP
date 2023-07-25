import React, { useEffect, useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContexProvider'
import { Footer, NavBar, ProductCard } from '../../Componetes'
import "./Home.css"

const HomePage = () => {
  const { productos } = useCustomContext()
  const [buscar, setBuscar] = useState("")
  const [buscarElementos, setBuscarElementos] = useState(productos)
  const [menorPrecio, setMenorPrecio] = useState(0)
  const [mayorPrecio, setMayorPrecio] = useState(2000)

  const marcas = ['Apple', 'Samsung', 'Huawei', 'Xiaomi'];
  const marcas2 = ['Sony', 'Motorola', 'Nokia', 'LG'];
  const memorias = [ '8Gb','32Gb', '128Gb', ]
  const memorias2 = [ '16Gb','64Gb', '256Gb', ]
  useEffect(() => {
    setBuscarElementos(productos.filter(producto => producto.nombre.toLowerCase().includes(buscar.toLowerCase()) && (producto.precio >= menorPrecio && producto.precio <= mayorPrecio)))
  }, [buscar, mayorPrecio, menorPrecio])
  return (

    <>
      <div>
        <NavBar onSearch={setBuscar} />
      </div>
      <div className='tituloHome'>
        <h1>Electronic Store</h1>
      </div>
      <div className='contenedorHome'>
        <div className='filtroDePrecio'>
          <div className='filtros'>
            <input type="text" className='filtroNumerico z' value={menorPrecio} onChange={(evento) => setMenorPrecio(Number(evento.target.value))} />
            <input type="text" className='filtroNumerico z' value={mayorPrecio} onChange={(evento) => setMayorPrecio(Number(evento.target.value))} />
          </div>

          <div className='filtros'>
            <div>
              {marcas.map((marca) => (
                <div className='filtro'  key={marca}>
                  <input type="checkbox" name={marca} id={marca} />
                  <p>{marca}</p>
                </div>
              ))}
            </div>
            <div>
              {marcas2.map((marca) => (
                <div className='filtro' key={marca}>
                  <input type="checkbox" name={marca} id={marca} />
                  <p>{marca}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='filtros'>
            <div>
              {memorias.map((memoria) => (
                <div className='filtro' key={memoria}>
                  <input type="checkbox" name={memoria} id={memoria} />
                  <p>{memoria}</p>
                </div>
              ))}
            </div>
            <div>
            <h1></h1>
              {memorias2.map((memoria) => (  
                <div className='filtro' key={memoria}>
                  <input type="checkbox" name={memoria} id={memoria} />
                  <p>{memoria}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className='contenedorcart'>
          {
            buscarElementos.length > 0
              ?
              buscarElementos.map(producto => (
                <ProductCard producto={producto} key={producto.id} />
              ))
              :
              <div className='resultadoDeBusqueda'>
                <h1>SIN RESULTADOS</h1>
              </div>
          }
        </div>
      </div>

      <Footer />

    </>
  )
}


export default HomePage
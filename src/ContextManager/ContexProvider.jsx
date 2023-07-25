import React, {createContext, useContext, useState} from 'react'
const Context = createContext ()
const ContexProvider = ({children}) => {
  
  const productos =[
    {
      nombre: 'Apple Mac Book Pro',
      precio: 950,
      stock: 50,
      categoria: "LAPTOPS",
      img:"../src/assets/Img/1.png",
      id: 1,
      descripcio: 'El MacBook Pro de 13 pulgadas es más capaz que nunca. Sobrealimentado por el chip M2 de última generación, es el portátil profesional más portátil de Apple, con hasta 20 horas de duración de la batería.'
    },
    {
      nombre: 'iPad Pro 11',
      precio: 950,
      stock: 80,
      categoria: "TABLETS",
      img: "../src/assets/Img/2.png",
      id: 2,
      descripcio: 'El iPad Pro con el chip M1 de Apple tiene un rendimiento fuera de serie y una batería que te acompaña todo el día. La pantalla Liquid Retina de 11 pulgadas es espectacular y ultraportátil.'
    },
    {
      nombre: 'Samsung Qled 4K',
      precio: 950,
      stock: 10,
      img: "../src/assets/Img/3.png",
      categoria: "TV SMART",
      id: 3,
      descripcio: 'El Smart TV Samsung tiene una resolución cuatro veces superior a la de una TV Full HD (3840 x 2160 píxeles) y cuenta con Crystal Processor 4K que garantiza una expresión de colores optimizada para que puedas ver cada detalle.'
    },
    {
      nombre: 'Samsung Galaxy s10',
      precio: 950,
      stock: 13,
      categoria: "PHONES",
      img: "../src/assets/Img/4.png",
      id: 4,
      descripcio: 'Con un diseño de vanguardia, el Samsung S10 Plus es un teléfono único que ofrece una pantalla AMOLED con una resolución Quad HD+ (3040 x 1440 píxeles) sin Notch ni distracciones. Además, cuenta con lector de huellas en pantalla y un sistema multicámara increíble.'
    },
    {
      nombre: 'iPad Apple Pro 6th generation',
      precio: 450,
      stock: 20,
      categoria: "TABLETS",
      img:"../src/assets/Img/5.png",
      id: 5,
      descripcio: 'Este producto combina la potencia y la capacidad de una computadora con la versatilidad y facilidad de uso que solo un iPad puede brindar. Realizar varias tareas a la vez, como editar documentos mientras buscás información en internet o sacarte una selfie, es sumamente sencillo.'
    },
    {
      nombre: 'Samsung Talking',
      precio: 1300,
      stock: 40,
      categoria: "TALKING",
      img:"../src/assets/Img/6.png",
      id: 6,
      descripcio: 'Este parlante compacto y potente ofrece una potencia de salida de 5 W, perfecta para llevar la fiesta a donde quieras. Con su batería recargable, tendrás hasta 16 horas de autonomía para escuchar tus canciones sin preocuparte por la energía.'
    },
    {
      nombre: 'Microsoft Surface Studio',
      precio: 950,
      stock: 5,
      categoria: "COPUTERS",
      img:"../src/assets/Img/7.png",
      id: 7,
      descripcio: 'Tus ideas a la velocidad de la luz. Dale vida a grandes ideas con un rendimiento que alimenta el software intensivo de procesador. Edita fotografías impresionantes. Ejecuta círculos alrededor de las representaciones. Crea gráficos 3D ricos para cada realidad. Crea de nuevas maneras, ya sea ilustrando un libro o diseñando un mundo virtual, tu creatividad salta de la pantalla táctil PixelSense de 28 pulgadas con 13.5 millones de píxeles de color realista.'
    },
    {
      nombre: 'Samsung Watch',
      precio: 950,
      stock: 7,
      categoria: "WATCHES",
      img:"../src/assets/Img/8.png",
      id: 8,
      descripcio: 'Presentamos nuestro Galaxy Watch duradero. Resistente al agua, con una pantalla frontal más resistente hecha de cristal de zafiro de primera calidad que es 1,6 veces más fuerte contra rayones. Casi cualquier cosa que tu día presente.'
    },
    {
      nombre: 'Pro Display XDR',
      precio: 350,
      stock: 3,
      categoria: "COPUTERS",
      img:"../src/assets/Img/9.png",
      id: 9,
      descripcio: 'Este monitor de 27" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 2560 x 1440 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad.'
    },
    {
      nombre: 'Gamepad Xbox One X',
      precio: 200,
      stock: 17,
      categoria: "GAMING",
      img:"../src/assets/Img/10.png",
      id: 10,
      descripcio: 'Este mando combina funciones revolucionarias mientras conserva precisión, comodidad y exactitud en cada movimiento. Gracias a su ergonomía especialmente pensada para la posición de tu mano, podés pasar horas jugando con total confort.'
    },
    {
      nombre: 'Smart Watch',
      precio: 950,
      stock: 30,
      categoria: "WATCHES",
      img:"../src/assets/Img/11.png",
      id: 11,
      descripcio: 'Tecnología, calidad y sofisticación definen al smartwatch de Kieslect. Sus diferentes funcionalidades logran que este reloj inteligente se convierta en un nuevo aliado para acompañarte en tu rutina de deporte, trabajo y ocio.'
    },
    {
      nombre: 'Google Nest',
      precio: 950,
      stock: 12,
      categoria: "GADGET",
      img:"../src/assets/Img/12.png",
      id: 12,
      descripcio: 'Sumate al mundo de la inteligencia artificial con el Google Nest Hub 2nd Gen que ofrece soluciones para automatizar algunas tareas en tu hogar.'
    },
    {
      nombre: 'Apple MacBook Air M2',
      precio: 950,
      stock: 33,
      categoria: "LAPTOPS",
      img:"../src/assets/Img/13.png",
      id: 13,
      descripcio: 'La notebook Apple MacBook Air M2 2022 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.'
    },
    {
      nombre: 'Apple Watch SE',
      precio: 950,
      stock: 53,
      categoria: "WATCHES",
      img:"../src/assets/Img/14.png",
      id: 14,
      descripcio: 'Poderosas funcionalidades para ayudarte a llevar una vida más conectada, activa, saludable y segura. El Apple Watch SE es mucho más que un reloj y está más a tu alcance.'
    },
    {
      nombre: 'Apple iPod',
      precio: 950,
      stock: 21,
      categoria: "GADGET",
      img:"../src/assets/Img/15.png",
      id: 15,
      descripcio: 'El ultradelgado y ultraliviano iPod touch viene en seis colores e incluye los increíbles EarPods de Apple.Pantalla Retina de 4 pulgadas '
    }
  ]
  

    const getProductById = (id) => {
      return productos.find (producto=> producto.id == id)
    }

    const getProductCartById = id => {return cart.find(producto => producto.id == id)}


    const [cart, setCart] = useState([])
    const isInCart = (id) => cart.some(producto => producto.id === Number(id))
  
    const addProductCart = (id, cantidad) => {
      if (isInCart(id)) {
        setCart(cart.map(producto =>{      
          if (producto.id == id) {
            producto.cantidad= cantidad
        }
        return producto 
    }))
  }
      else {
        setCart([...cart, {...getProductById(id), cantidad: cantidad}  ])}
    }
  
    const getTotal = () => {
      let total = 0
      cart.forEach(producto=> { total += producto.precio * producto.cantidad       
      });
      return total
    }

  return (
    <Context.Provider value={{productos, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}}>
        {children}
    </Context.Provider>
  )
}

export const useCustomContext = () => useContext(Context)

export default ContexProvider
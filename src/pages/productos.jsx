import { useState } from "react" //<--- Tabla producto
import Formulario from "../components/Formulario"
import TablaProductos from "../components/TablaProductos"
import DB from "../constants/productos"//<--- Tabla producto


const Productos = () => {

  console.log(DB) /* un array de productos JS */ //<--- Tabla producto
  const [productos, setProductos] = useState(DB) //<--- Tabla producto

  // * CRUD ->
  // * C: -> Create
    const handleAgregarProducto = (nuevoProducto) => {

      //Logica de cambio de estado (productos)
      console.log(nuevoProducto);

      //TODO:El ID -> Lo genera el backend

      //productos.push(nuevoProducto)  //! NO SE PUEDE MODIFICAR DIRECTAMENTE

    const nuevoEstadoProductos = [...productos, nuevoProducto] // <- clono el array y genero un nuevo array 
    setProductos(nuevoEstadoProductos)
      

    }
  // * U: -> Update
    const handleEditarProducto = () => {

    }
  // * D: -> Delete  
    const handleBorrarProducto = () => {

    }    

  return (
    <>
        <Formulario handleAgregarProducto={handleAgregarProducto}/>
        <TablaProductos productos={productos}/>
    </>
  )
}

export default Productos
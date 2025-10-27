import { useState } from "react" //<--- Tabla producto
import Formulario from "../components/Formulario"
import TablaProductos from "../components/TablaProductos"
import DB from "../constants/productos"//<--- Tabla producto


const Productos = () => {

  console.log(DB) /* un array de productos JS */ //<--- Tabla producto
  const [productos, setProductos] = useState(DB) //<--- Tabla producto

  // * CRUD ->
  // * C: -> Create
    const handleAgregarProducto = () => {

    }
  // * U: -> Update
    const handleEditarProducto = () => {

    }
  // * D: -> Delete  
    const handleBorrarProducto = () => {

    }    

  return (
    <>
        <Formulario />
        <TablaProductos productos={productos}/>
    </>
  )
}

export default Productos
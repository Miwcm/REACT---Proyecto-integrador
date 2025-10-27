import { useState } from "react" //<--- Tabla producto
import Formulario from "../components/Formulario"
import TablaProductos from "../components/TablaProductos"
import DB from "../constants/productos"//<--- Tabla producto
import { v4 as uuidv4 } from 'uuid';


const Productos = () => {

  console.log(DB) /* un array de productos JS */ //<--- Tabla producto
  const [productos, setProductos] = useState(DB) //<--- Tabla producto

  // * CRUD ->
  // * C: -> Create
    const handleAgregarProducto = (nuevoProducto) => {

      //Logica de cambio de estado (productos)
      console.log(nuevoProducto);

      //TODO:El ID -> Lo genera el backend
      nuevoProducto.id = uuidv4() // timestamp (cantidad de milisegundos desde uno de enero de 1970)   
      //productos.push(nuevoProducto)  //! NO SE PUEDE MODIFICAR DIRECTAMENTE

    const nuevoEstadoProductos = [...productos, nuevoProducto] // <- clono el array y genero un nuevo array 
    setProductos(nuevoEstadoProductos)
      

    }
  // * U: -> Update
    const handleEditarProducto = () => {

    }
  // * D: -> Delete  
    const handleBorrarProducto = (id) => {
      // array.filter() || devuelve un array con elementos filtrados
      // * Si prod es igual al id, ese elemento es el que quiero descartar
      console.log(productos);
      const nuevoEstadoProducto = productos.filter((prod)=> prod.id !== id)
      console.log(nuevoEstadoProducto);
      setProductos(nuevoEstadoProducto)
    }    

  return (
    <>
        <Formulario handleAgregarProducto={handleAgregarProducto}/>
        <TablaProductos productos={productos} handleBorrarProducto={handleBorrarProducto}/>
    </>
  )
}

export default Productos
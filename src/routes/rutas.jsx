import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Nosotros from "../pages/Nosotros"
import Contacto from "../pages/Contacto"
import NoEncontrado from "../pages/NoEncontrado"
import Productos from "../pages/Productos"

const rutas = () => {
const componenteRutas = useRoutes(
    [
        {
            path: '/',
            element: <Inicio/>
        },

         {
            path: '/productos',
            element: <Productos/>
            
        },

         {
            path: '/nosotros',
            element: <Nosotros/>
        },
            {
            path: '/contacto',
            element: <Contacto/>
        }
         ,
         
        {
            path: '*',
            element: <NoEncontrado/>
        }

    ]
)

  return 
}

export default rutas
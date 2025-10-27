

const Hijo1 = ({setMensaje}) => { //props = {setMensaje}

  const handleClick = () => {
    setMensaje('Hola Mundo')
  }
  return (
    <> 
    <div>Hijo1</div>
    <button onClick={handleClick} className="cursor-pointer text-white rounded-sm bg-violet-500 hover:bg-violet-600 px-4 p-2 ">Cambiar mensaje</button>
     </>
  )
}

export default Hijo1
import Swal from "sweetalert2";

const  handleNotificacion = (callback) => {
    
      Swal.fire({  
        title: "Desea borrar el producto?",
        text: "Cuidado, no se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borrar!"
      }).then((result) => {
        if (result.isConfirmed) {
          callback()
          Swal.fire({
            title: "Borrado!",
            text: "El producto fue borrado.",
            icon: "success"
      });
  }
});
}

export default handleNotificacion
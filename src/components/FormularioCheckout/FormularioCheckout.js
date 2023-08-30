import {useState} from "react";
function FormularioCheckout({generarOrden}){

    const [dataUsuario, setDataUsuario] = useState({email: '', nombre:'',telefono:'',direccion:'' });


    function ClickFinalizarCompra(e){
        e.preventDefault();
        generarOrden(dataUsuario.nombre, dataUsuario.email, dataUsuario.direccion, dataUsuario.telefono);

    }



    return(
            <form>
                <input onChange={(e)=>{setDataUsuario({...dataUsuario, email:e.target.value})}} type="email" placeholder="Email"></input>
                <input onChange={(e)=>{setDataUsuario({...dataUsuario, nombre:e.target.value})}} type="text" placeholder="Nombre"></input>
                <input onChange={(e)=>{setDataUsuario({...dataUsuario, direccion:e.target.value})}} type="text" placeholder="Direccion"></input>
                <input onChange={(e)=>{setDataUsuario({...dataUsuario, telefono:e.target.value})}} type="number" placeholder="Telefono"></input>
                <button onClick={ClickFinalizarCompra}>Finalizar Compra</button>
            </form>
    )
}

export default FormularioCheckout
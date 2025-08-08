import { app } from '../FireBaseConfig';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../providers/CartContext";
import "./VentasContainer.css";

function VentasContainer({ nombre, apellido, telefono, mail, setNombre, setApellido, setTelefono, setMail }){

    const { carrito, setCarrito } = useContext(CartContext);

    const handleAgregarVenta= async ()=>{
        const db = getFirestore(app);
        const ventasCollection = collection(db, 'ventas')

        const nuevaVenta={
            nombre:nombre,
            apellido:apellido,
            telefono:telefono,
            mail:mail,
            carrito:carrito,
            fecha:new Date()
        };

        const docRef = await addDoc(ventasCollection, nuevaVenta)

        setCarrito([]);

        setNombre("");
        setApellido("");
        setTelefono("");
        setMail("");

        alert("¡Compra realizada con éxito! Tu número de compra es: "+ docRef.id);
    }

    return(
        <button className='boton-comprarr' onClick={handleAgregarVenta}>
            Comprar
        </button>
    )

}

export default VentasContainer;
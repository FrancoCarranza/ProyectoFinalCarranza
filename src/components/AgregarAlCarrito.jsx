import { useContext } from 'react';
import { CartContext } from '../providers/CartContext';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./AgregarAlCarrito.css"

function AgregarAlCarrito({ setCantidad, producto, cantidad}){

    const{ agregarAlCarrito } = useContext(CartContext);

    const handleClick = ()=>{
        agregarAlCarrito({ producto, cantidad });
        toast.success('Producto agregado al carrito', {
            position:'top-center',
            autoClose:1500,
        });
        setCantidad(1);
    }

    return(
        <div className="agregar-carrito">
            <button className="agregar-boton" onClick={handleClick}>
                Agregar al carrito
            </button>
        </div>
    )
}

export default AgregarAlCarrito;
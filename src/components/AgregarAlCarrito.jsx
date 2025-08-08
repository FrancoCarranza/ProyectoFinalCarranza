import { useContext } from 'react';
import { CartContext } from '../providers/CartContext';
import "./AgregarAlCarrito.css"

function AgregarAlCarrito({ setCantidad, producto, cantidad}){

    const{ agregarAlCarrito } = useContext(CartContext);

    const handleClick = ()=>{
        agregarAlCarrito({ producto, cantidad });
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
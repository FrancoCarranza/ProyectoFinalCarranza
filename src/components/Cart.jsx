import { useContext } from 'react';
import { CartContext} from "../providers/CartContext";
import { NavLink } from 'react-router-dom';
import './Cart.css';

function Cart(){

    const { carrito, eliminarProducto, vaciarCarrito } = useContext(CartContext);
    const total = carrito.reduce((acc, item)=>acc+item.precio+item.cantidad, 0);

    return(
        <div className="cart">
            
            <h2 className='titulo-cart'>Carrito</h2>

            {carrito.length===0?(
                <p className='vacio-cart'>El carrito está vacio</p>
            ):(
                <div className='contenedor-cart'>
                        <ul>
                            {carrito.map((producto)=>(
                                <li className='producto-cart' key={producto.id}>
                                        <img className='img-product' src={producto.imagen} alt={producto.nombre} />
                                        <div className='info-product'>
                                            <h3 className='titulo-product'>{producto.nombre}</h3>
                                            <p className='precio-product'>${producto.precio.toFixed(2)}</p>
                                            <p className='unidades-product'>Unidades: {producto.cantidad}</p>
                                            <p className='total-product'>Precio total: ${(producto.precio*producto.cantidad).toFixed(2)}</p>
                                        </div>
                                        <div className='boton-product'>
                                            <button className='boton-boton' onClick={() => eliminarProducto(producto.id)}>Eliminar producto</button>
                                        </div>
                                </li>
                            ))}
                        </ul>
                        <div className='botones-derecha'>
                            <h3 className='total-cart'>Precio total: ${total.toFixed(2)}</h3>
                            <NavLink to={'/comprar'} className='comprar-cart' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Realizar compra</NavLink>
                            <button onClick={vaciarCarrito} className='vaciar-cart'>Vaciar carrito</button> 
                        </div>
                </div>
            )}
        </div>
    )
}

export default Cart;
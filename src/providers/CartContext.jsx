import { createContext, useState } from 'react';

export const CartContext = createContext();

function CartProvider({ children }){

    const [carrito, setCarrito]=useState([]);

    const agregarAlCarrito=({ producto, cantidad })=>{

        const productoExistente = carrito.find((item)=>item.id===producto.id) 

        if(productoExistente){
            const nuevoCarrito = carrito.map((item)=>
            item.id===producto.id
                ?{...item, cantidad:item.cantidad+cantidad}
                :item
            );
            setCarrito(nuevoCarrito);
        }else{
            setCarrito([...carrito, {...producto, cantidad}]);
        }
    }

    const eliminarProducto=(id)=>{
        setCarrito(carrito.filter((item)=> item.id!==id));
    }

    const vaciarCarrito=()=>{
        setCarrito([]);
    }
    
    return(
        <CartContext.Provider
        value={{
            carrito,
            setCarrito,
            agregarAlCarrito,
            eliminarProducto,
            vaciarCarrito
        }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
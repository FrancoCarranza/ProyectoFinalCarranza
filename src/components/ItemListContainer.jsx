import Buttons from './Buttons';
import './ItemListContainer.css';
import { app } from '../FireBaseConfig';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Item from "./Item";


function ItemListContainer(){

    const [productos, setProductos] = useState([]);

    const resultado = useParams();

    useEffect(()=>{
        if(resultado.categoria){
            handleTraerProductosPorCategoria();
        }else{
            handleTraerProductos()
        }
    }, [resultado.categoria]);



    const handleTraerProductos=()=>{
        const db = getFirestore(app);
        const productosCollection = collection(db, 'productos');
        const elPedido = getDocs(productosCollection);

        elPedido
            .then((respuesta)=>{
                const productosFinales = [];
                respuesta.docs.forEach((producto)=>{
                    productosFinales.push(producto.data());
                })
                setProductos(productosFinales)
            })
            .catch(()=>{
                console.error('Error al traer los productos');
            })
    }

    const handleTraerProductosPorCategoria= ()=>{
        const db = getFirestore(app);
        const productosCollection = collection(db, 'productos');

        const filtro=query(productosCollection, where(
            'categoria', '==', resultado.categoria
        ));

        const elPedido = getDocs(filtro);

        elPedido
            .then((respuesta)=>{
                const productosFinales = [];
                respuesta.docs.forEach((producto)=>{
                    productosFinales.push(producto.data());
                });

                setProductos(productosFinales);
            })
            .catch(()=>{
                console.error('Error al traer los productos')
            });
    }


    return(
        <div className='productos'>
            <Buttons/>
            <section className='product-table'>
                {productos.length === 0 ? (
                    <p className="mensaje-vacio">No hay productos disponibles en esta categoría.</p>
                ) : (
                    productos.map((producto, index) => (
                        <Item key={index} producto={producto}/>
                    ))
                )}
                
            </section>
        </div>
    )
}

export default ItemListContainer;
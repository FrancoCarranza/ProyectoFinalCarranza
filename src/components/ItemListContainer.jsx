import Buttons from './Buttons';
import { app } from '../FireBaseConfig';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import './ItemListContainer.css';


function ItemListContainer(){

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const resultado = useParams();

    useEffect(()=>{
        setLoading(true);
        if(resultado.categoria){
            handleTraerProductosPorCategoria().then(()=>setLoading(false));
        }else{
            handleTraerProductos().then(()=>setLoading(false));
        }
    }, [resultado.categoria]);



    const handleTraerProductos=()=>{
        const db = getFirestore(app);
        const productosCollection = collection(db, 'productos');
        const elPedido = getDocs(productosCollection);

        return elPedido
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

        return elPedido
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
            {loading ? (
                <p className='cargando-productos'>Cargando productos...</p>
            ) : (
                <section className='product-table'>
                    {productos.length === 0 ? (
                        <p className="mensaje-vacio">No hay productos disponibles en esta categoría.</p>
                    ) : (
                        productos.map((producto, index) => (
                            <Item key={index} producto={producto}/>
                        ))
                    )}
                
                </section>
            )}
        </div>
    )
}

export default ItemListContainer;
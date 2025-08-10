import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { app } from '../FireBaseConfig';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemCount from "./ItemCount";
import AgregarAlCarrito from "./AgregarAlCarrito";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ItemDetailContainer.css';


function ItemDetailContainer(){

    const [producto, setProducto]=useState({})
    const [cantidad, setCantidad]=useState(1);
    const resultado=useParams();

    useEffect(()=>{
        handleTraerDetalle();
    }, []);

    const handleTraerDetalle=()=>{
        const db = getFirestore(app);
        const productosCollection = collection(db, "productos");

        const filtro=query(productosCollection, where(
            'id', '==', Number(resultado.id)
        ))

        const elPedido = getDocs(filtro);

        elPedido
            .then((respuesta)=>{
                setProducto(respuesta.docs[0].data())
            })
            .catch(()=>{
                console.error('Error al traer detalle de producto')
            })
    }

    return(
        <>
            <div className="detalle-producto">
                <div className="producto">
                    <img className="imagen" src={producto.imagen} alt={producto.nombre} />
                    <div className="informacion">
                        <h2 className="producto-nombre">{producto.nombre}</h2>
                        <p className="precio">${producto.precio}</p>
                        <p>{producto.descripcion}</p>
                        <p className="stock">Stock: {producto.stock} {producto.stock>1?'unidades' : 'unidad'}</p>
                    </div>
                    <div className="botones-derecha">
                        <ItemCount cantidad={cantidad} setCantidad={setCantidad} producto={producto}/>
                        <AgregarAlCarrito setCantidad={setCantidad} producto={producto} cantidad={cantidad}/>
                    </div>
                </div>
            </div>
            <ToastContainer 
                position="top-center" 
                autoClose={3000} 
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
            />
        </>
    )

}

export default ItemDetailContainer;
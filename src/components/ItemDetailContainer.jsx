import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { app } from '../FireBaseConfig';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(){

    const [producto, setProducto]=useState({})
    const [cantidad, setCantidad]=useState(1);
    const resultado=useParams();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        handleTraerDetalle().then(()=>setLoading(false));
    }, []);

    const handleTraerDetalle=()=>{
        const db = getFirestore(app);
        const productosCollection = collection(db, "productos");

        const filtro=query(productosCollection, where(
            'id', '==', Number(resultado.id)
        ))

        const elPedido = getDocs(filtro);

        return elPedido
            .then((respuesta)=>{
                setProducto(respuesta.docs[0].data())
            })
            .catch(()=>{
                console.error('Error al traer detalle de producto')
            })
    }

    return(
        <>
            {loading ? (
                <p
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minHeight: 'calc(100vh - 80px)',
                        marginTop: '40px',
                        fontSize: '25px',
                        fontWeight: '400'
                    }}
                >
                    Cargando producto...
                </p>
            ) : (
                    <ItemDetail setCantidad={setCantidad} cantidad={cantidad} producto={producto}/>
            )}
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
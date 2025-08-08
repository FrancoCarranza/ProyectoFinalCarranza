import './ItemCount.css'

function ItemCount({ cantidad, setCantidad, producto }){

    const handleSumar=()=>{
        if(cantidad<producto.stock){
            setCantidad(cantidad+1)
        }
    };

    const handleRestar=()=>{
        if(cantidad>1){
            setCantidad(cantidad-1)
        }
    };

    return(
        <div className="item-count">
            <p className="unidades">Unidades</p>
            <div className="botones-compra">
                <button className="boton" onClick={handleSumar}>+</button>
                <p className="contador">{cantidad}</p>
                <button className="boton" onClick={handleRestar}>-</button>
            </div>
        </div>
    )
}

export default ItemCount;
import AgregarAlCarrito from "./AgregarAlCarrito";
import ItemCount from "./ItemCount";
import './ItemDetail.css';

function ItemDetail({ setCantidad, cantidad, producto }){
    return(
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
    )
}

export default ItemDetail;
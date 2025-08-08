import { NavLink } from 'react-router-dom';
import './ItemListContainer.css';

function Item({ producto }) {
  return (
    <article className="product-card">
      <h3>{producto.nombre}</h3>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>
        {Intl.NumberFormat('es-AR', {
          style: 'currency',
          currency: 'ARS',
        }).format(producto.precio)}
      </p>
      <NavLink
        to={`/producto/${producto.id}`}
        className="boton"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Ver mas
      </NavLink>
    </article>
  );
}

export default Item;

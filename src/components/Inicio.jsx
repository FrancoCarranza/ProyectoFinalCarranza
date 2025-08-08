import './Inicio.css';
import Buttons from './Buttons';

function Inicio(){
    return(
        <div className='inicio'>
            <h2 className='titulo'>Bienvenido a React Store</h2>
            <p className='texto'>Explorá nuestras categorías destacadas y productos recomendados</p>

            <Buttons/>

            <p className='texto'>¡Disfrutá de una experiencia de compra única!</p>
        </div>
    )
}

export default Inicio;
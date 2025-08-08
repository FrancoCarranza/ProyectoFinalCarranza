import { Routes, Route} from 'react-router-dom';
import Inicio from './Inicio';
import Contacto from './Contacto';
import Cart from './Cart';  
import NotFound from './NotFound';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import CheckOutForm from './CheckOutForm';

function Rutas(){
    return(
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
            <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/comprar' element={<CheckOutForm/>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Rutas;
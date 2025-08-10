import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faRegistered } from '@fortawesome/free-solid-svg-icons';
import "./NavBar.css";


function CartWidget(){
    return(
        <FontAwesomeIcon icon={faCartShopping} size="lg"/>
    );
}

export default CartWidget;
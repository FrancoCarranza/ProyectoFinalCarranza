import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar(){
    return(
        <div className="navBar">
            <div className="logo">
                <NavLink to="/" className="logoLink" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <FontAwesomeIcon className="R" icon={faRegistered} size="2x"/>
                    <h1>React Store</h1>
                </NavLink>
            </div>

            <ul className="navLinks">
                <li>
                    <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/productos" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Productos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contacto" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Contacto
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className="cart-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <CartWidget/>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
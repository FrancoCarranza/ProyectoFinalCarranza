import { NavLink } from "react-router-dom";
import './Buttons.css';

function Buttons() {

    return (
        <div className="botones">
            <NavLink to="/productos/smartphones" className="categoria-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Smartphones</NavLink>
            <NavLink to="/productos/laptops" className="categoria-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Laptops</NavLink>
            <NavLink to="/productos/fragrances" className="categoria-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Fragrances</NavLink>
            <NavLink to="/productos/skincare" className="categoria-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Skincare</NavLink>
            <NavLink to="/productos/groceries" className="categoria-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Groceries</NavLink>
        </div>
    );
}

export default Buttons;
import { Link } from 'react-router-dom';

import {useState} from "react";
export default function Navbar() {
    // false = collapsed, true = showing full navbar (open)
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={isOpen ? "navbar responsive" : "navbar"} id="navbar">
            <Link to="/" onClick={closeMenu} className="active">Home</Link>
            <Link to="/bio" onClick={closeMenu}>Biography</Link>
            <Link to="/ensemble" onClick={closeMenu}>Dance Ensemble</Link>
            <Link to="/gymnastics" onClick={closeMenu}>Aerobic Gymnastics</Link>
            <Link to="/documentary" onClick={closeMenu}>Documentary</Link>
            <a href="#" className="icon" onClick={() => setIsOpen(!isOpen)}>
                <i className="fas fa-bars"></i>
            </a>
        </nav>
    );
}
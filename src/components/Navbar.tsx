import {useState} from "react";
export default function Navbar() {
    // false = collapsed, true = showing full navbar (open)
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={isOpen ? "navbar responsive" : "navbar"} id="navbar">
            <a href="#bio" className="active">Home</a>
            <a href="#ensemble">Dance Ensemble</a>
            <a href="#gymnastics">Aerobic Gymnastics</a>
            <a href="#documentary">Documentary</a>
            <a href="#" className="icon" onClick={() => setIsOpen(!isOpen)}>
                <i className="fa fa-bars"></i>
            </a>
        </nav>
    );
}
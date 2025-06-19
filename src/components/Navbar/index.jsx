import "./styles.css";
import {Link} from "react-router-dom"
export default function Navbar(){
    return <nav className="nav">
        <Link to="/" className="nav-title">C / H</Link>
        <ul>
            <li>
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
                <Link to="/Projects" className="nav-link">Projects</Link>
            </li>
            <li>
                <Link to ="/contact" className="nav-link">contact me</Link>
            </li>
        </ul>
    </nav>;

}

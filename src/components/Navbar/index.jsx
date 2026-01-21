import "./styles.css";
import { Link } from "react-router-dom";

export default function Navbar({ projectRef }) {
    const scrollToProjects = () => {
        projectRef?.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <nav className="nav">
            <Link to="/" className="nav-title">C / H</Link>
            <ul>
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                    <button onClick={scrollToProjects} className="nav-link">Projects</button>
                </li>
                <li>
                    <Link to="/contact" className="nav-link">contact me</Link>
                </li>
            </ul>
        </nav>
    );
}

import "./styles.css";

export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="nav-title">C / H</a>
        <ul>
            <li>
                <a href="/about" className="nav-link">about</a>
            </li>
            <li>
                <a href="/Projects" className="nav-link">Projects</a>
            </li>
            <li>
                <a href="/contact" className="nav-link">contact me</a>
            </li>

        </ul>
    </nav>;

}

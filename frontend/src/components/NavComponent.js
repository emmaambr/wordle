import '../css/Nav.css';

function Navbar() {

    return (     
        <nav className="Navbar">
            <ul>
                <li>
                    <a href="/"> Home </a>
                </li>
                <li>
                    <a href="/highscore"> Highscore </a>
                </li>
                <li>
                    <a href="/info"> Info </a>
                </li>
            </ul>
        </nav>  
    );
}

export default Navbar;
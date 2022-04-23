import '../css/Nav.css';

function Navbar() {

    return (     
        <nav className="Navbar">
            <ul>
                <li>
                    <a href="/" className=''> Home </a>
                </li>
                <li>
                    <a href="/highscore" className=""> Highscore </a>
                </li>
                <li>
                    <a href="/info" className=""> Info </a>
                </li>
            </ul>
        </nav>  
    );
}

export default Navbar;
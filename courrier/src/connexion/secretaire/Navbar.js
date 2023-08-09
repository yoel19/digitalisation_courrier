import { useRef } from "react";
import{FaBars, FaTimes} from "react-icons/fa";
import './Navbar.css';
function Navbar(){
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classlist.toggle("responsive_nav");
    }
    return(
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/#">Parametre</a>
                <a href="/#">Courriers entrant</a>
                <a href="/#">courriers sortants</a>
                <a href="/#">courrier interne</a>
                <a href="/#">Archive</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>

                </button>
            </nav>
            <button onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    )
}




export default Navbar;

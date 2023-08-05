import { useRef } from "react";
import{FaBars, FaTimes} from "react-icons/fa";
import style from "./connexion/style";
function Navbar(){
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classlist.toggle("responsive_nav");
    }
    return(
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">espace de travail</a>
                <a href="/#">gestion utilisateur</a>
                <a href="/#">deconnection</a>
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

import { useRef } from "react";
import{FaBars, FaTimes} from "react-icons/fa";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
function Navbar(){
    const navRef = useRef();

    const navigate = useNavigate();

    const showNavbar = () => {
        navRef.current.classlist.toggle("responsive_nav");
    }
    
    return(
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/dashboard/parametreAdmin">Parametre</a>
                <a href='/dashboard/workspaceAdmin'>espace de travails</a>
                <a href='/dashboard/users'>Utilisateurs</a>
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

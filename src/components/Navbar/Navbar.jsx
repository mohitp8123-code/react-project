import "./Navbar.css";
import { FiMenu, FiSearch, FiBell } from "react-icons/fi";
import logo from "../../assets/Images/TR-Logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return(
        <nav className="navbar">
            <div className="nav-left">
                <button className="icon-btn">
                    <FiMenu />
                </button>

                <button className="icon-btn">
                    <FiSearch />
                </button>
            </div>
            <div className="nav-logo">
                <img src={logo} alt="TechResearch Logo" />
            </div>

            <div className="nav-right">
                <button className="icon-btn">
                    <FiBell />
                </button>
                <button className="signin-btn"
                onClick={() => navigate("/signin")}>Sign In</button>
            </div>
        </nav>
    );
}


export default Navbar;
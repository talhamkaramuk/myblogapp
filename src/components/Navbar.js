import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Oshi-mata Blog</h1>
            <div className="links">
                <Link to="/">Anasayfa</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#ff9b0f",
                    borderRadius: "8px",
                }}>Yeni Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;
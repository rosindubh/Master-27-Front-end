import "../../App.css";
import { Link } from "react-router-dom";
const Navbar = ({ user, setUser }) => {
    return (
        <nav className="navbar">
            <div>
            {user && <Link className="upload-image" to="/upload/">Upload an Image</Link>}
                {!user && <Link className="links" to="/signup">Sign-up</Link>}
                {!user && <Link className="links" to="/login">Login</Link>}
                {user && <Link className="notifications" to="/notifications">
                    {user.notifications ? user.notifications.length : 0}
                </Link>}
                {user && <button className="logout-btn" onClick={() => setUser()} >Logout</button>}
            </div>
        </nav>
    );
}

export default Navbar;
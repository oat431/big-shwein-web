import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="navbar bg-base-100 shadow-sm px-4">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">Big Shwein</Link>
            </div>
            <div className="flex-none gap-2">
                {isAuthenticated ? (
                    <>
                        <Link to="/profile" className="btn btn-ghost">Profile</Link>
                        <button className="btn btn-error btn-sm" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="btn btn-ghost">Login</Link>
                        <Link to="/register" className="btn btn-primary btn-sm">Register</Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default NavBar;
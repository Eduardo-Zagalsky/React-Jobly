import { Link } from "react-router-dom"
import "./nav.css"
const Navbar = () => {
    return (
        <div style={{ backgroundColor: "navy", justifyContent: "center" }}>
            <Link className="nav-item" to="/" >Home</Link>
            <Link className="nav-item" to="/companies" >Companies</Link>
            <Link className="nav-item" to="/jobs" >Jobs</Link>
            <Link className="nav-item" to="/login" >Login</Link>
            <Link className="nav-item" to="/signup" >Signup</Link>
            <Link className="nav-item" to="/profile" >Profile</Link>
        </div>
    )
}

export default Navbar;
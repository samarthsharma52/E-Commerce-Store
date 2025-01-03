import { connect } from "react-redux";
import { Link } from "react-router-dom";


function Header({ commonData }) {
    function f1() {
        return (
            <>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </>
        );
    }
    function f2() {
        return (
            <>
                <li className="nav-item">
                    <Link className="nav-link" to="/profile">My Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/logout">Logout</Link>
                </li>
            </>
        );
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Logo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        {commonData.islogin == "Y" ? f2() : f1()}
                        <li className="nav-item">
                            <Link className="nav-link" to="/basket">Basket</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/query">Query</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Search" />
                        <button className="btn btn-primary" type="button">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
let connectToStore = (state) => ({ commonData: state });
export default connect(connectToStore)(Header);
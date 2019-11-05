import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <Link className="navbar-brand" to="/home">Equip Indutry</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="https://www.w3schools.com/bootstrap4/bootstrap_typography.asp">Companies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="https://www.w3schools.com/bootstrap4/bootstrap_typography.asp">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Registred</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navigation;
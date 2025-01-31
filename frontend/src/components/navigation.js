import React from 'react';
import { Link } from 'react-router-dom';

import Logo from "../img/logo.svg";

import "./styles/navigation.css"; 

class Navigation extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                    <Link className="navbar-brand" to="/"><img className="Navigation__logo" src={Logo} alt="Logo"/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="text-uppercase Navigation__link nav-link" to="/companies">Companies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-uppercase Navigation__link nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-uppercase Navigation__link nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-uppercase Navigation__link nav-link" to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navigation;
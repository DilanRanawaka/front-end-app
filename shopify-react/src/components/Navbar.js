import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link to="/" className="navbar-brand">
                <img src={logo} height="28" alt=""/>
            </Link>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <div className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" data-toggle="dropdown" href="">WHERE TO SELL</Link>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="#">Colombo</Link>
                            <Link className="dropdown-item" to="#">Galle</Link>
                        </div>
                    </div>
                    <Link to="" className="nav-item nav-link">PRODUCTS</Link>
                    <Link to="" className="nav-item nav-link">BLOG</Link>
                    <div className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="">ABOUT</Link>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="">Contact</Link>
                            <Link className="dropdown-item" to="">More 2</Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-nav ml-auto">
                    <div className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="">Help Center</Link>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="">SOCIAL</Link>
                            <Link className="dropdown-item" to="">More 2</Link>
                        </div>
                    </div>
                    <Link href="" className="nav-item nav-link">Login</Link>
                    <button type="button" className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
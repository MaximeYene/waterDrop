import React from "react"
import { Link } from "react-router-dom"
import '../styles/home.css'
import Logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar-container"  >
            <div className="navbar-logo" >
                <Link to='/home' >
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>
            <div className="navbar-list" >
                <Link to='/' className="navbar-list-link" >Home</Link>
                <Link to='/produits' className="navbar-list-link" >Produits</Link>
                <Link to='/contact' className="navbar-list-link" >Contacts</Link>
                <Link to='/connexion' className="navbar-list-link" >Connexion</Link>
            </div>
        </div>
    )
}

export default Navbar;
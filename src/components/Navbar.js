import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Navbar.css'
import logo from '../assets/images/logo.svg'
import user from '../assets/images/user.svg'
import search from '../assets/images/search.svg'
import cartImage from '../assets/images/cartImage.svg'
import down from '../assets/images/down.svg'

const Navbar = ({ cart }) => {
    return (
        <nav>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <div id="pages">
                <div id="shop-dropdown">
                    <Link to="/">Shop</Link>
                    <img src={down} alt="dropdown-icon"/>
                </div>
                <Link to="#">About Us</Link>
                <Link to="#">Our Stores</Link>
                <Link to="#">Contact Us</Link>
            </div>
            <div id="options">
                <div className="align-horizontal">
                    <p href="#">Search</p> &nbsp;&nbsp;
                    <img src={search} alt="search-icon" />
                </div>
                <img src={user} alt="user" />
                <Link to="/cart"><img src={cartImage} alt="cart" /></Link>
                <span id="cart">{ cart.length }</span>
            </div>
        </nav>
    )
}

export default Navbar;
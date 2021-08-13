import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="NavIcon">
                <Link className="" to="/">
                    <img src="../images/logo.png" height="40px" alt="Image not found"/>
                </Link>
            </div>
            <div className="NavLinkContainer">
                <Link className="NavLink" to="/">Home</Link>
            </div>
            <div className="NavLinkContainer">
                <Link className="NavLink" to="/orders">Orders</Link>
            </div>
            <div className="NavLinkContainer">
                <Link className="NavLink" to="/customers">Customers</Link>
            </div>
            <div className="NavLinkContainer">
                <Link className="NavLink" to="/statistics">Stats</Link>
            </div>
            <div className="NavLinkContainer">
                <Link className="NavLink" to="/emails">Emails</Link>
            </div>
        </div>
    )
}

export default NavBar

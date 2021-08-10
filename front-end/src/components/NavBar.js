import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="NavIcon">
                <Link className="" to="/">
                    <img src="../images/logo.png" height="40px"/>
                </Link>
            </div>
            <div className="NavLinkContainer">
                <Link className="Link" to="/">Home</Link>
            </div>
            <div className="NavLinkContainer">
                <Link className="Link" to="/orders">Orders</Link>
            </div>
            <div className="NavLinkContainer">
                <Link className="Link" to="/customers">Customers</Link>
            </div>
            <div className="NavLinkContainer">
                <Link className="Link" to="/statistics">Stats</Link>
            </div>
            <div className="NavLinkContainer">
                <Link className="Link" to="/emails">Emails</Link>
            </div>
        </div>
    )
}

export default NavBar

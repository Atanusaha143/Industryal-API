import React from 'react'
// import '../App.css'
// import './style.css'
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom'

const SideMenuCustomer = () => {
    return (
        <div id="SubMenu">
            <div id="Menu">
            </div>
            <div className="SubLinkContainer">
                <Link className="SubLink" to="/sales/customers/">
                    All Customer
                </Link>
            </div>
            <div className="SubLinkContainer">
                <Link className="SubLink" to="/sales/customer/add/">
                    Add Customer
                </Link>
            </div>
            {/* <div className="Option">
                <Link>
                    Banned Customers
                </Link>
            </div> */}
        </div>

    )
}

export default SideMenuCustomer

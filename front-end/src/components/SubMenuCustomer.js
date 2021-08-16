import React from 'react'
// import '../App.css'
// import './style.css'
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom'

const SideMenuCustomer = () => {
    return (
        <div id="SideMenu">
            <div id="Menu">
                <div className="OptionList">
                    <div className="Option"><Link to="/sales/customers/">All Customer</Link></div>
                    <div className="Option"><Link to="/sales/customer/add/">Add Customer</Link></div>
                    <div className="Option"><Link>Banned Customers</Link></div>
                </div>
            </div>
        </div>

    )
}

export default SideMenuCustomer

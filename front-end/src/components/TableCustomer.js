import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios'

const TableCustomer = () => {

    const[items, setItems] = useState([]);
    const[error, setError] = useState();
    
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/sales/customers")
            .then(response=>{
                setItems(response.data)
                // setError(false)
                // setError(false)
            })
            .catch((error)=>{
                console.log(error.request.statusText);
                setError('404');
                // setItems(null);
                // setItems(null)
            }
                // error=>setError(true)
                // setItems(null),
                // setError(true)
            );            
        
            console.log("This is error: " + error)
            console.log("This is list: " + items)
    }, [])

    let id_ = 0;

    const generateUpdateForm = (id) => {
        console.log(id);
    }
    
    if(error === '404')
    {
        return (
            <div>Error receiving data</div>
        )
    }
    else if(items !== null)
    {
        // console.log(items);
        return (
            <div>
                <div className="searchBar">
                    <form>
                        <input type="text" className="searchBarInput" placeholder="Enter something to search"/>
                        <button type="submit" className="searchBtn">
                            {/* <img src="/images/search.png"/> */}
                        </button>
                    </form>
                </div>
                <table className="CusTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Delivery Point</th>
                            <th>First Purchase</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(cus=>{
                                return (
                                    <tr key={cus.id}>
                                        <td>{cus.id}</td>
                                        <td>{cus.name}</td>
                                        <td>{cus.email}</td>
                                        <td>{cus.phone}</td>
                                        <td>{cus.delivery_point}</td>
                                        <td>{cus.first_purchase}</td>
                                        <td>{cus.type}</td>
                                        <td><Link className="UpdateBtn" onClick={()=>generateUpdateForm(cus.id)} to={'/sales/customer/update/'+cus.id}>Update</Link></td>
                                        <td><button>Delete</button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                {/* <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1>
                <h1>ABC</h1> */}
            </div>
            
        )
    }
}

export default TableCustomer

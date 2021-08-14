import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FormUpdateCustomer from './FormUpdateCustomer';
// import Popup from 'reactjs-popup';
// import '../styles/styles.css'

const TableCustomer = () => {


    const[error, setError] = useState(null);
    const[isLoaded, setIsLoaded] = useState(false);
    const[items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/sales/customers")
        .then(res=>res.json())
        .then(
            (result)=>{
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
        .catch(
            
        )
    }, [])

    const generateUpdateForm = (id) => {
        // setItems(null)
        console.log(id)
    }

    if(error){
        return <div>Error:{error.message}</div>;
    }
    else if(!isLoaded){
        return <div>Loading...</div>;
    }
    else if(items !== null)
    {
        return (
            <div>
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
                                        {/* <td><button>Update</button></td> */}
                                        {/* <td><Link className="UpdateBtn" onClick={()=>generateUpdateForm(cus.id)} to='/sales/customers/update'>Update</Link></td> */}
                                        <td><Link className="UpdateBtn" to='/sales/update/customer'>Update</Link></td>
                                        <td><button>Delete</button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TableCustomer

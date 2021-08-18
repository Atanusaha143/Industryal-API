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
            })
            .catch((error)=>{
                setError('404');
            }
            );            
    }, [])

    let id_ = 0;

    const generateUpdateForm = (id) => {
        console.log(id);
    }

    const onSearchInput = (event) => {
        event.preventDefault();
        if(event.target.value == "")
        {
            axios.get("http://127.0.0.1:8000/api/sales/customers")
            .then(response=>{
                setItems(response.data)
            })
            .catch((error)=>{
                setError('404');
            }
            ); 
        }
        else
        {
            console.log("Searching");
            axios.get("http://127.0.0.1:8000/api/sales/customers/search/"+event.target.value)
            .then(response=>{
                setItems(response.data)
            })
            .catch((error)=>{
                setItems([])
                setError('404');
            }
            );    
        }
        console.log(event.target.value);
                
    }

    
    
    
    return (
        <div>
            <div className="searchBar">
                <form>
                    <input type="text" className="searchBarInput" placeholder="Enter Name" onChange={onSearchInput}/>
                    <button type="submit" className="searchBtn">
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
                        items
                        ?
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
                        :
                        <div>None</div>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableCustomer

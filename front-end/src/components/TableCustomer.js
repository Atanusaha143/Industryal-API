import React from 'react'
import { useState, useEffect } from 'react'

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
    }, [])

    if(error){
        return <div>Error:{error.message}</div>;
    }
    else if(!isLoaded){
        return <div>Loading...</div>;
    }
    else
    {
        return (
            <div>
                <table class="CusTable">
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
                                    <tr>
                                        <td key={cus.id}>{cus.id}</td>
                                        <td>{cus.name}</td>
                                        <td>{cus.email}</td>
                                        <td>{cus.phone}</td>
                                        <td>{cus.delivery_point}</td>
                                        <td>{cus.first_purchase}</td>
                                        <td>{cus.type}</td>
                                        <td><button>Update</button></td>
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

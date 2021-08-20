import axios from 'axios';
import { useState,useEffect } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';

const TableProduct = () => {
    const[items, setItems] = useState([]);
    const[error, setError] = useState();
    const[itemslist, setItemsList] = useState([])

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/product/list")
            .then(response=>{
                setItems(response.data)
                setError("success");
            })
            .catch((error)=>{
                setError("failed");
            }
            );            
    }, [])

    const onCheck = (event) => {
        // console.log(event.target.value)
        setItemsList([...itemslist, event.target.value])
    }

    console.log(itemslist)

    return (
        <div>
            {/* <div className="searchBar">
                <form onSubmit={handleSearchSubmit}>
                    <input type="text" className="searchBarInput" placeholder="Enter Name" onChange={onSearchInput}/>
                    <button type="submit" className="searchBtn">
                    </button>
                </form>
            </div> */}
            <table className="CusTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        error=="failed"
                        ?
                        <tr><td colSpan="5">Failed to Load</td></tr>
                        :
                        items == false
                        ?
                        <tr><td colSpan="5">Loading</td></tr>
                        :
                        items.length>0
                        ?
                        items.map(prod=>{
                            return (
                                <tr key={prod.id}>
                                    <td>{prod.id}</td>
                                    <td>{prod.product_name}</td>
                                    <td>{prod.product_description}</td>
                                    <td>{prod.selling_price}</td>
                                    <td>{prod.stock}</td>
                                    <td>
                                        {/* <input name="quantity" value={} style={{width:"40px"}} type="numeric"/> */}
                                        <input name={prod.id} value={prod.id} onChange={onCheck} type="checkbox"/>
                                    </td>
                                    {/* <td>{prod.delivery_point}</td> */}
                                    {/* <td>{prod.first_purchase}</td>
                                    <td>{prod.type}</td> */}
                                    {/* <td className="btnCell"><Link className="UpdateBtn" to={'/sales/customer/update/'+prod.id}>Update</Link></td> */}
                                    {/* <td className="btnCell"><button className="DeleteBtn" onClick={}>Delete</button></td> */}
                                </tr>
                            );
                        })
                        :
                        <tr><td colSpan="7">No such  exists</td></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableProduct

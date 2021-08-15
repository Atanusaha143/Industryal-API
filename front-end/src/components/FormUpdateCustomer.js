import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const FormUpdateCustomer = (props) => {
    const[customer, setCustomer] = useState({name:'', email:'', phone:'', delivery_point:'', type:''})
    const history = useHistory()

    const handleInputChange = (event) =>{
        const attribute = event.target.name;
        const val = event.target.value
        setCustomer({...customer, [attribute]:val})
    }

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/sales/customers/"+props.id)
            .then(
                // (result=>console.log(result.data))
                result=>setCustomer(result.data)
            )
            .then(
                
            )
    }, [])

    return (
        <div>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Name:</label></td>
                            <td><input name="name" id="name" value={customer.name} onChange={handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td><label>Email:</label></td>
                            <td><input name="email" id="email" value={customer.email} onChange={handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td><label>Phone Number:</label></td>
                            <td><input name="phone" id="phone" value={customer.phone} onChange={handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td><label>Delivery Location:</label></td>
                            <td><input name="delivery_point" id="delivery_point" value={customer.delivery_point} onChange={handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td><label>Type:</label></td>
                            <td><input name="type" id="type" value={customer.type} onChange={handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button>Confirm</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default FormUpdateCustomer

import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'



const FormUpdateCustomer = () => {
    const[customer, setCustomer] = useState({name:'', email:'', phone:'', delivery_point:'', type:''})
    const history = useHistory()

    const handleInputChange = (event) =>{
        const attribute = event.target.name;
        const val = event.target.value
        setCustomer({...customer, [attribute]:val})
    }

    return (
        <div>
            <form>
                <label>Name:</label>
                <input name="name" id="name" value={customer.name} onChange={handleInputChange}/>
                <label>Email:</label>
                <input name="email" id="email" value={customer.email} onChange={handleInputChange}/>
                <label>Phone Number:</label>
                <input name="phone" id="phone" value={customer.phone} onChange={handleInputChange}/>
                <label>Delivery Location:</label>
                <input name="delivery_point" id="delivery_point" value={customer.delivery_point} onChange={handleInputChange}/>
                <label>Type:</label>
                <input name="type" id="type" value={customer.type} onChange={handleInputChange}/>
            </form>
        </div>
    )
}

export default FormUpdateCustomer

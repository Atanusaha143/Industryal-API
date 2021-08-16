import axios from 'axios';
import React from 'react'
import { useState } from 'react';

const FormAddCustomer = () => {

    const [formData, setFormData] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);

        axios.post("http://127.0.0.1:8000/api/sales/customers", {
            'name': event.target[0].value,
            'email': event.target[1].value,
            'phone': event.target[2].value,
            'delivery_point': event.target[3].value,
            'type': event.target[4].value,
        })
            .then((response)=>{
                console.log(response.data)
            })
            .catch(
                (err)=>console.log(err.toJSON())
            )

    }

    return (
        <div>
            <form className="Form" onSubmit={handleSubmit}>
                <div className="Label-Input">
                    <label>Name:</label>
                    <input type="text"/>
                </div>
                <div className="Label-Input">
                    <label>Email:</label>
                    <input type="text"/>
                    
                </div>
                <div className="Label-Input">
                   <label>Phone:</label>
                    <input type="text"/>
                    
                </div>
                <div className="Label-Input">
                    <label>Delivery Location:</label>
                    <input type="text"/>
                </div>
                <div className="Label-Input">
                    <label>Type:</label>
                    <input type="text"/>
                </div>
                <div className="Form-Button">
                    <button>Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default FormAddCustomer

import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const FormUpdateCustomer = (props) => {
    const[customer, setCustomer] = useState({name:'',
                                             email:'', 
                                             phone:'', 
                                             delivery_point:'', 
                                             type:''})
    const history = useHistory()

    const handleInputChange = (event) =>{
        const attribute = event.target.name;
        const val = event.target.value
        setCustomer({...customer, [attribute]:val})
    }

    var parts = window.location.href.split('/');
    var answer = parts[parts.length - 1];

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/sales/customers/"+answer)
            .then(
                // (result=>console.log(result.data))
                result=>setCustomer(result.data)
            )
            .then(
                
            )
    }, [])

    const handleSubmission = (event) => {
        event.preventDefault();
        // axios.put("http://127.0.0.1:8000/api/sales/customers", customer)
        //     .then((response)=>{
        //         console.log(response.data)
        //         // setPostMsg("Created customer successfully")
        //     })
        //     .catch(
        //         ((err)=>{
        //             if(err.toJSON().message == "Request failed with status code 422")
        //             {
        //                 // setPostMsg("Error 422: Cannot process data to system")
        //             }
        //         })
        //     )
        console.log(event.target.value)
    }

    return (
        <div>
            <form className="Form" onSubmit={handleSubmission}>
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
                <button type='submit'>Confirm</button>  
            </form>
        </div>
    )
}

export default FormUpdateCustomer

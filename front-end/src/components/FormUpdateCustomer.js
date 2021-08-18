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
    const [errName, setErrName] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPhone, setErrPhone] = useState("");
    const [errDeliv, setErrDeliv] = useState("");
    const [errType, setErrType] = useState("");
    const [postMsg, setPostMsg] = useState("");

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
                <div className="Label-Input">
                    <label>Name:</label>
                    <input className="inputBox" type="text" name="name" id="name" value={customer.name} onChange={handleInputChange}/>
                    <div className="errMsg">{errName}</div>
                </div>
                <div className="Label-Input">
                    <label>Email:</label>
                    <input className="inputBox" type="text" name="email" id="email" value={customer.email} onChange={handleInputChange}/>
                    <div className="errMsg">{errEmail}</div>
                </div>
                <div className="Label-Input">
                    <label>Phone Number:</label>
                    <input className="inputBox" type="text" name="phone" id="phone" value={customer.phone} onChange={handleInputChange}/>
                    <div className="errMsg">{errPhone}</div>
                </div>
                <div className="Label-Input">
                    <label>Delivery Location:</label>
                    <input className="inputBox" type="text" name="delivery_point" id="delivery_point" value={customer.delivery_point} onChange={handleInputChange}/>
                    <div className="errMsg">{errDeliv}</div>
                </div>
                <div className="Label-Input">
                    <label>Type:</label>
                    <input className="inputBox" type="text" name="type" id="type" value={customer.type} onChange={handleInputChange}/>
                    <div className="errMsg">{errType}</div>
                </div>
                {/* <button type='submit'>Confirm</button>   */}
                <div className="Form-Button">
                    <button type='submit'>Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default FormUpdateCustomer

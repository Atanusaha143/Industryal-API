import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form'

const FormAddCustomer = () => {

    const [formData, setFormData] = useState({name:'',
                                             email:'', 
                                             phone:'', 
                                             delivery_point:'', 
                                             type:''})
    const [errName, setErrName] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPhone, setErrPhone] = useState("");
    const [errDeliv, setErrDeliv] = useState("");
    const [errType, setErrType] = useState("");

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault();
        //Name
        if(formData.name == "")
        {
            setErrName("Required");
        }
        else if(formData.name != "")
        {
            setErrName("");
        }
        //email
        if(formData.email == "")
        {
            setErrEmail("Required")
        }
        else if(formData.email != "")
        {
            setErrEmail("");
        }
        //phone
        if(formData.phone == "")
        {
            setErrPhone("Required")
        }
        else if(formData.phone != "")
        {
            setErrPhone("");
        }
        if(formData.delivery_point == "")
        {
            setErrDeliv("Required")
        }
        else if(formData.delivery_point != "")
        {
            setErrDeliv("");
        }
        if(formData.type == "")
        {
            setErrType("Required")
        }
        else if(formData.type != "")
        {
            setErrType("");
        }
        else
        {
            // axios.post("http://127.0.0.1:8000/api/sales/customers", formData)
            // .then((response)=>{
            //     console.log(response.data)
            // })
            // .catch(
            //     (err)=>console.log(err.toJSON())
            // )
            console.log("Done");
        }
        // axios.post("http://127.0.0.1:8000/api/sales/customers", {
        //     'name': event.target[0].value,
        //     'email': event.target[1].value,
        //     'phone': event.target[2].value,
        //     'delivery_point': event.target[3].value,
        //     'type': event.target[4].value,
        // })
        //     .then((response)=>{
        //         console.log(response.data)
        //     })
        //     .catch(
        //         (err)=>console.log(err.toJSON())
        //     )

    }

    return (
        <div>
            <form className="Form" onSubmit={handleSubmission}>
                <div className="Label-Input">
                    <label>Name:</label>
                    <input type="text" 
                            name="name"
                            placeholder="Enter the customer's name"
                            value={formData.name}
                            onChange={handleInputChange}
                    />
                    <div className="errMsg">{errName}</div>
                </div>
                <div className="Label-Input">
                    <label>Email:</label>
                    <input type="text"
                            name="email"
                            placeholder="Enter the customer's email"
                            value={formData.email}
                            onChange={handleInputChange}
                            // {...register("email", { required: true, maxLength: 20 })}
                    />
                    <div className="errMsg">{errEmail}</div>
                    {/* {errors?.email?.type === "required" && <p>This field is required</p>}  */}
                </div>
                <div className="Label-Input">
                   <label>Phone:</label>
                    <input name="phone" type="text"
                            placeholder="Enter the customer's phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            // {...register("phone", { required: true, maxLength: 20 })}
                    />
                    <div className="errMsg">{errPhone}</div>
                    {/* {errors?.phone?.type === "required" && <p>This field is required</p>}  */}
                    
                </div>
                <div className="Label-Input">
                    <label>Delivery Location:</label>
                    <input name="delivery_point" type="text"
                            placeholder="Enter the customer's location"
                            value={formData.delivery_location}
                            onChange={handleInputChange}
                            // {...register("delivery_location", { required: true, maxLength: 20 })}
                    />
                    <div className="errMsg">{errDeliv}</div>
                    {/* {errors?.delivery_location?.type === "required" && <p>This field is required</p>}  */}
                </div>
                <div className="Label-Input">
                    <label>Type:</label>
                    <input name="type" type="text"
                            placeholder="Enter the type of customer"
                            value={formData.type}
                            onChange={handleInputChange}
                            // {...register("type", { required: true, maxLength: 20 })}
                    />
                    <div className="errMsg">{errType}</div>
                    {/* {errors?.type?.type === "required" && <p>This field is required</p>}  */}
                </div>
                <div className="Form-Button">
                    <button>Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default FormAddCustomer

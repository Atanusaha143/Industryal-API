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
    const [error, setError] = useState([])
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();

    const handleInputChange = (event) => {
        // const attribute = event.target.name;
        // const val = event.target.value
        // setFormData({...formData, [attribute]:val})
        const {name, value} = event.target
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault();
        // console.log(event.target);
        // setFormData(event.target.value);
        // console.log(event.target[1].value)
        console.log(formData)
        // if(event.target[1].value == '')
        // {
        //     setError()
        // }
        axios.post("http://127.0.0.1:8000/api/sales/customers", formData)
            .then((response)=>{
                console.log(response.data)
            })
            .catch(
                (err)=>console.log(err.toJSON())
            )
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
            <form className="Form" onSubmit={handleSubmit(handleSubmission)}>
                <div className="Label-Input">
                    <label>Name:</label>
                    <input type="text" 
                            name="name"
                            placeholder="Please enter the customer's name"
                            value={formData.name}
                            onChange={handleInputChange}
                            {...register("name", { required: true, maxLength: 20 })}
                    />
                    {errors?.name?.type === "required" && <p>This field is required</p>} 
                </div>
                <div className="Label-Input">
                    <label>Email:</label>
                    <input type="text"
                            name="email"
                            placeholder="Please enter the customer's email"
                            value={formData.email}
                            onChange={handleInputChange}
                            {...register("email", { required: true, maxLength: 20 })}
                    />
                    {errors?.email?.type === "required" && <p>This field is required</p>} 
                </div>
                <div className="Label-Input">
                   <label>Phone:</label>
                    <input name="phone" type="text"
                            placeholder="Please enter the customer's phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            {...register("phone", { required: true, maxLength: 20 })}
                    />
                    {errors?.phone?.type === "required" && <p>This field is required</p>} 
                    
                </div>
                <div className="Label-Input">
                    <label>Delivery Location:</label>
                    <input name="delivery_point" type="text"
                            placeholder="Please enter the customer's location"
                            value={formData.delivery_location}
                            onChange={handleInputChange}
                            
                            {...register("delivery_location", { required: true, maxLength: 20 })}
                    />
                    {errors?.delivery_location?.type === "required" && <p>This field is required</p>} 
                </div>
                <div className="Label-Input">
                    <label>Type:</label>
                    <input name="type" type="text"
                            placeholder="Please enter the type of customer"
                            value={formData.type}
                            onChange={handleInputChange}
                            
                            {...register("type", { required: true, maxLength: 20 })}
                    />
                    {errors?.type?.type === "required" && <p>This field is required</p>} 
                </div>
                <div className="Form-Button">
                    <button>Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default FormAddCustomer

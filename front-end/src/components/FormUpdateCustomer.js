import React from 'react'

const FormUpdateCustomer = () => {
    return (
        <div>
            <form>
                <label>Name:</label>
                <input name="name" id="name"/>
                <label>Email:</label>
                <input name="email" id="email"/>
                <label>Phone Number:</label>
                <input name="phone" id="phone"/>
                <label>Delivery Location:</label>
                <input name="delivery_point" id="delivery_point"/>
                <label>Type:</label>
                <input name="type" id="type"/>
            </form>
        </div>
    )
}

export default FormUpdateCustomer

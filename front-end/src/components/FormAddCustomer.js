import React from 'react'

const FormAddCustomer = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted');
    }

    return (
        <div>
            <form className="Form" onSubmit={handleSubmit}>
                <div className="Label-Input">
                    <label>Name:</label>
                    <input type="text" name="name"/>
                </div>
                <div className="Label-Input">
                    <label>Email:</label>
                    <input type="text" name="email"/>
                    
                </div>
                <div className="Label-Input">
                   <label>Phone:</label>
                    <input type="text" name="phone"/>
                    
                </div>
                <div className="Label-Input">
                    <label>Delivery Location:</label>
                    <input type="text" name="delivery_point"/>
                </div>
                <div className="Label-Input">
                    <label>Type:</label>
                    <input type="text" name="type"/>
                </div>
                <div className="Form-Button">
                    <button>Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default FormAddCustomer

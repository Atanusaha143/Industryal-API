import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const PromptCreateOrder = () => {

    const[errMsg, setErr] = useState("")

    const handleSubmission = (event) =>{
        event.preventDefault()
        console.log(event.target[0].value)
    }

    return (
        <div className="PromptContainer">
            <div class="PromptText">Would you like to place an order for an existing customer?</div>
            <div className="PromptSubContainer">
                <div className="PromptLeft">
                    <div className="YesNo">Yes</div>
                    <div>
                        <form onSubmit={handleSubmission}>
                            <input name="cusid" type="numeric"/>
                            <button className="LinkBtn" type="submit">Enter ID</button>
                            <label>{errMsg}</label>
                        </form>
                    </div>
                </div>
                <div className="PromptRight">
                    <div className="YesNo">No</div>
                    <div><Link to="/sales/customer/add"class="LinkBtn">Create New</Link></div>
                </div>
            </div>
        </div>
    )
}

export default PromptCreateOrder

import { useEffect, useState } from 'react'

import React from 'react'
import axios from 'axios'



const Profile = () => {

    const [user, setUser] = useState("")

    const id = '1';

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/sales/user/"+id)
            .then(result=>{
                setUser(result.data);
            })
            .catch((error)=>{
                // setError("failed");
            }
            ); 
            console.log(user);
    }, [])

    return (
        <div class="profile">
            <div className="profilePic">
                <img src="#" alt="Image not found"/>
            </div>
            <div className="mainProfileContainer">
                <div className="mainProfileLabels">
                    <label>Name:</label>
                    <label>Username:</label>
                    <label>Email:</label>
                    <label>Phone:</label>
                    <label>Address:</label>
                    <label>Position:</label>
                    <label>Work Hours:</label>
                </div>
                <div className="mainProfileData">
                    <label>{user.firstname+user.lastname}</label>
                    <label>{user.username}</label>
                    <label>{user.email}</label>
                    <label>{user.phone}</label>
                    <label>{user.address}</label>
                    <label>{user.position}</label>
                    <label>{user.work_hour}</label>
                </div>
            </div>
        </div>
    )
}

export default Profile

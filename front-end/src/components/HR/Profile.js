import { useState , useEffect } from 'react';
import { React } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';

const Profile=()=>{
    return(
        <>
            <div className="title text-center mb-3">
                <h3 className="font-width-border">Profile</h3>
            </div>
            <hr></hr>
            <br></br>
               
            <Table className="table table-hover w-75">
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Job position</td>
                        <td></td>
                    </tr>
                    
                    <tr>
                        <td>Phone No</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td></td>
                    </tr>
                    </tbody>
            </Table>
               
        </>
    )
}
export default Profile;

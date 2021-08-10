import { useHistory} from 'react-router-dom'
import { useState , useEffect } from 'react';
import { React } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom"

const UserList=()=>{
    const history = useHistory();
    const[list,setList] = useState([]);
    useEffect( async ()=>{
        let result = await fetch("http://127.0.0.1:8000/api/HR/user/list");
        result = await result.json();
        setList(result);
    },[])

    function deleteUser(id)
    {
        if(window.confirm('Are you sure?'))
        {
            fetch('http://127.0.0.1:8000/api/HR/user/delete/'+id, {
            method: 'DELETE',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            }
            })
            history.go(0);
        }
    }
    return(
        <Table  className="table table-hover ">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>User Name</th>
                    <th>Gender</th>
                    <th>User Type</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Job Position</th>
                    <th>Employment Start date</th>
                    <th>Action</th>
                </tr>    
            </thead>
            <tbody>
                {
                    list.map((user)=>
                        <tr>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.username}</td>
                            <td>{user.gender}</td>
                            <td>{user.type}</td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.position}</td>
                            {/* <td>
                                <img src="/upload/Users/{{$user['profile_pic']}}" alt="Profile" width="100" height="100"></img> 
                            </td> */}
                            <td>{user.created_at}</td>
                            
                            <td>
                                <Link to={`/HR/user/edit/${user.id}`} className='btn btn-primary btn-block mx-2 m-1'> Edit </Link>
                                <button onClick={()=>deleteUser(user.id)} className='btn btn-danger btn-block m-1'>Delete</button>
                        
                            </td>
                        </tr>
                    )
                }
                
            </tbody>
        </Table>
    )
}
export default UserList;
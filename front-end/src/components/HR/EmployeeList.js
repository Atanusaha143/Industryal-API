import { useState , useEffect } from 'react';
import { React } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';

const EmployeeList=()=>{
    const[searchEmp,setSearchEmp] = useState('');
    const[list,setList] = useState([]);
    useEffect( async ()=>{
        let result = await fetch("http://127.0.0.1:8000/api/HR/employee/list");
        result = await result.json();
        setList(result);
    },[])

    function search()
    {
        axios.get("http://127.0.0.1:8000/api/HR/employee/search/"+searchEmp)
        .then(function (response) {
            const result = response.data;
            setList(result);
        });
    }

    return(
        <>
            <div className="title text-center mb-3">
                <h3 className="font-width-border">Employee List</h3>
            </div>
            <hr></hr>
            <div className="input-group">
                <input className="form-control"type="text" placeholder="Find By Employee Name..." name="search"  onChange={(e)=>{setSearchEmp(e.target.value)}}></input>
                <div className="input-group-append">
                    <button onClick={search} type="submit" className="btn btn-success">Search</button>
                </div>
            </div>
            <br></br>
            <div className="row align-items-start mb-2">
                <div className="col">
                </div>
                <div className="col-10"> 
                </div>
                <div classname="col">
                    <a href="#" class="btn btn-primary rounded p-1 mr-3 text-right">Download</a>
                </div>
            </div>
            <Table  className="table table-hover ">
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Gender</th>
                        <th>Supervisor</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Job Position</th>
                        <th>Group</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((emp)=>
                            <tr>
                                <td>{emp.employee_id}</td>
                                <td>{emp.employee_name}</td>
                                <td>{emp.gender}</td>
                                <td>{emp.supervisor}</td>
                                <td>{emp.present_address}</td>
                                <td>{emp.phone}</td>
                                <td>{emp.job_position}</td>
                                <td>{emp.employee_group}</td>
                                
                                <td>
                                    <Link to={`/HR/employee/edit/${emp.employee_id}`} class="btn btn-success m-1"> Edit </Link>
                                    <Link to={`/HR/employee/delete/${emp.employee_id}`} class="btn btn-danger m-1"> Delete </Link>
                                </td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </Table>   
        </>
    )
}
export default EmployeeList;

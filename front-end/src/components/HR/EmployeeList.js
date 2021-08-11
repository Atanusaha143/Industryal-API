import { useHistory} from 'react-router-dom'
import { useState , useEffect } from 'react';
import { React } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom"

const EmployeeList=()=>{
    const history = useHistory();
    const[list,setList] = useState([]);
    useEffect( async ()=>{
        let result = await fetch("http://127.0.0.1:8000/api/HR/employee/list");
        result = await result.json();
        setList(result);
    },[])

    return(
        <>
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
                                    <Link to={`/HR/employee/edit/${emp.id}`} class="btn btn-success m-1"> Update </Link>
                                    <Link to={`/HR/employee/delete/${emp.id}`} class="btn btn-danger m-1"> Delete </Link>
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

import { useParams,useHistory} from 'react-router-dom'
import { useState , useEffect } from 'react';
import { React } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Approve=()=>{
    const history = useHistory();
    const {id:eid} = useParams();
    const[list,setEmp] = useState([]);
    useEffect( async ()=>{
        let result = await fetch("http://127.0.0.1:8000/api/HR/leave/"+eid);
        result = await result.json();
        setEmp(result);
    },[])

    function approve(id)
    {
        fetch('http://127.0.0.1:8000/api/HR/leave/approve/'+id, {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            }
        })
        history.push('/HR/leave/request/list');
    }

    return(
        <>
            <div className="title text-center mb-3">
                <h3 className="font-width-border">Approve Leave Request</h3>
            </div>
            <hr></hr>
            <Table  className="table table-hover ">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Leave Type</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Description</th>
                        <th>Request Made</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{list.employee_id}</td>
                        <td>{list.type}</td>
                        <td>{list.start_time}</td>
                        <td>{list.end_time}</td>
                        <td>{list.request_description}</td>
                        <td>{list.request_made}</td>
                        <td>
                            {/*  if({leave.status}==='Pending')
                            {
                                <span className="text-primary font-weight-bold">{leave.status}</span>
                            }
                            else if({leave.status}=='Approved')
                            {
                                <span className="text-success font-weight-bold">{leave.status}</span>
                            }
                            else
                            {
                                <span className="text-danger font-weight-bold">{leave.status}</span>
                            }  */}

                                {list.status}  
                        </td>
                    </tr>
                
                </tbody>
            </Table>
            <div className="container">
                <div className="row justify-content-center">
                   <center><h3 className="text-primary">Are you sure to approve leave request?</h3></center> 
                </div>
                <div className="row justify-content-center">
                <center>
                    <button onClick={()=>approve(list.id)} className='btn btn-danger btn-block m-1'>Approve</button>
                    <Link to={`/HR/leave/request/list`} class="btn btn-success m-1"> Back </Link>
                </center>
                    
                </div>
            </div>
        </>
    )
}
export default Approve;
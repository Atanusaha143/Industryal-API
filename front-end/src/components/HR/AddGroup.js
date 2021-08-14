import { useHistory} from 'react-router-dom'
import { useState } from 'react';
import { React } from 'react';
import axios from 'axios';

const AddGroup=()=>{
    const [employee_id,setEmployeeId] = useState("");
    const [employee_group,setGroup] = useState("");
    const history = useHistory();

    const addGroup = async () => {
        await axios.post('http://127.0.0.1:8000/api/HR/employee/group', {
            employee_id,employee_group
            
        },{
            headers: {
                'ContentType': 'application/json'
            }
        })
        history.push('/HR/employee/list');
    }
    return(
        <>
            <div className="title text-center mb-3">
                <h3 className="font-width-border">New Group</h3>
            </div>
            <hr></hr>
            <div className="w-50  m-auto">
                <div className="form-group">
                    <label >Employee ID</label> 
                    <input type="number" className="form-control" id="lastname" name="employee_id" onChange={(e)=>setEmployeeId(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Group</label>
                        <select name="employee_group" id="group" className="form-control" onChange={(e)=>setGroup(e.target.value)}>
                            <option>Please Select Group </option>
                            <option value="HR">Human Resource Department</option>
                            <option value="product">Product Department</option>
                            <option value="finance">Finance Department</option>
                            <option value="sales">Sales Department </option>
                        </select>
                </div>
                <div>
                    <center> <button onClick={addGroup} className="btn btn-outline-success btn-block w-25 mt-3 "  type="submit">Add</button></center>
                </div>
               
            </div>
        </>
    )
}
export default AddGroup;
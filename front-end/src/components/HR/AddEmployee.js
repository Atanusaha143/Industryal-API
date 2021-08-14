import { useHistory} from 'react-router-dom'
import { useState } from 'react';
import { React } from 'react';
import axios from 'axios';

const AddEmployee=()=>{
    const [employee_id,setEmployeeId] = useState("");
    const [employee_name,setEmployeeName] = useState("");
    const [gender,setGender] = useState("");
    const [supervisor,setSupervisor] = useState("");
    const [present_address,setAddress] = useState("");
    const [phone,setPhone] = useState("");
    const [job_position,setPosition] = useState("");
    const [start_time,setStartTime] = useState("");
    const [end_time,setEndTime] = useState("");
    const [hour_worked,setHour] = useState("");
    const [employment_start_date,setStartDate] = useState("");
    const history = useHistory();

    const addEmp = async () => {
        await axios.post('http://127.0.0.1:8000/api/HR/employee/create', {
            employee_id,employee_name,gender,supervisor,present_address,
            phone,job_position,start_time,end_time,hour_worked,employment_start_date
        },{
            headers: {
                'ContentType': 'application/json'
            }
        })
        history.push('/HR/employee/list');
    }
    const gen=["male","female"];
    return(
       
        <>
            <div className="title text-center mb-3">
                <h3 className="font-width-border">New Employee</h3>
            </div>
            <hr></hr>
            <div className="borber w-50  m-auto">
            
                <div className="form-group">
                    <label>Employee ID</label> 
                    <input type="number" class="form-control" id="employeeid" name="employee_id" onChange={(e)=>setEmployeeId(e.target.value)}></input>
                </div>
            
                <div className="form-group">
                    <label>Employee Name</label> 
                    <input type="txt" class="form-control" id="employeename" name="employee_name" onChange={(e)=>setEmployeeName(e.target.value)}></input>
                </div>
                
                <div className="from-group">
                    <label>Gender </label><br></br>
                    {  
                        gen.map(result=>(
                            <>
                            <input type="radio" name="gender" value={result} onChange={(e)=>setGender(e.target.value)}></input>
                            <b>{result}</b>
                            </>
                        ))
                    }
                </div>
                <div className="form-group">
                    <label>Supervisor</label>
                    <select name="supervisor" id="super" className="form-control" onChange={(e)=>setSupervisor(e.target.value)}>
                        <option value="Super admin">Super admin</option>
                        <option value="HR manager">HR manager</option>
                        <option value="Product Manager">Product manager</option>
                        <option value="Finance Manger">Finance manager</option>
                        <option value="Sales Manger">Sales manager</option>
                    </select>
                    
                </div>
                <div className="foem-group">
                    <label>Present address</label>
                    <input type="text" className="form-control" id="presentaddress" name="present_address" onChange={(e)=>setAddress(e.target.value)} ></input>
                </div>
                <div className="from-group">
                    <label>Phone</label>
                    <input type="number" className="form-control" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" onChange={(e)=>setPhone(e.target.value)}></input>
                </div>
                <div className="from-group">
                    <label>Job Position</label> 
                    <input type="txt" className="form-control" id="position" name="job_position" onChange={(e)=>setPosition(e.target.value)}></input>
                </div>
                <div className="from-group">
                    <label>Start Time(per day)</label> 
                    <input type="time" className="form-control" id="stime" name="start_time" onChange={(e)=>setStartTime(e.target.value)}></input>
                </div>
                <div class="from-group">
                    <label>End Time(per day)</label> 
                    <input type="time" className="form-control" id="etime" name="end_time" onChange={(e)=>setEndTime(e.target.value)}></input>
                </div>

                <div className="form-group">
                    <label>Hour Worked(Per week)</label> 
                    <input type="txt" className="form-control" id="worked" name="hour_worked" onChange={(e)=>setHour(e.target.value)}></input>
                    </div>
                <div className="from-group">
                    <label>Employment start date</label>
                    <input type="date" className="form-control" id="hiredate" name="employment_start_date" onChange={(e)=>setStartDate(e.target.value)}></input>
                </div>
                <div className="from-group">
                    <center><button onClick={addEmp} className="btn btn-outline-primary btn-block w-50 mt-3" type="submit">Add</button></center>
                </div>    
            </div>
        </>
    )
}
export default AddEmployee;
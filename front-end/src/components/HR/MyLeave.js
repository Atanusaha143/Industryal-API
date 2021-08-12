import { useHistory} from 'react-router-dom'
import { useState } from 'react';
import { React } from 'react';
import axios from 'axios';

const MyLeave=()=>{
    const [type,setType] = useState("");
    const [start_date,setStartDate] = useState("");
    const [end_date,setEndDate] = useState("");
    const [description,setDescription] = useState("");
    const history = useHistory();

    const myLeave = async () => {
        await axios.post('http://127.0.0.1:8000/api/HR/leave/request', {
           type,start_date,end_date,description
        },{
            headers: {
                'ContentType': 'application/json'
            }
        })
        history.push('/HR/leave/request/list');
    }


    return(
        <>
            <div className=" w-50   m-auto">
                <div className="form-group">
                    <label>Type</label>
                    <select name="type" id="type" className="form-control" onChange={(e)=>setType(e.target.value)}>
                        <option>Plese Select</option>
                        <option value="sick">Sick Leave</option>
                        <option value="other">Other leave</option>
                    </select>
                </div>
                <div className="from-group">
                    <label>Start date</label>
                    <input type="date" className="form-control" id="startdate" name="start_date" onChange={(e)=>setStartDate(e.target.value)}></input>
                </div>
                <div className="from-group">
                    <label>End date</label>
                    <input type="date" className="form-control" id="startdate" name="end_date" onChange={(e)=>setEndDate(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Descreption</label>
                    <textarea type="text" name="description" id="leave_description" className="form-control" onChange={(e)=>setDescription(e.target.value)}></textarea>
                </div>
                <div className="from-group">
                    <center><button onClick={myLeave} className="btn btn-outline-primary btn-block w-50 mt-3" type="submit">Create Leave Request</button></center> 
                </div>
            </div>
        </>
    )

}
export default MyLeave;
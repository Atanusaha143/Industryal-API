import { useHistory} from 'react-router-dom'
import { useState } from 'react';
import { React } from 'react';
import axios from 'axios';




const AddUser=()=>{
    const [firstname,setFirstName] = useState("");
    const [lastname,setLastName] = useState("");
    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [gender,setGender] = useState("");
    const [position,setPosition] = useState("");
    const [type,setType] = useState("");
    const [pass,setPassword] = useState("");
    const [work_hour,setHour] = useState("");
    //const [profile_pic,setPhoto] = useState("");
    const history = useHistory();

    

   /*  async function addUser()
    {
        let user = {firstname,lastname,username,email,phone,address,gender,position,type,pass,work_hour};
        await fetch('http://127.0.0.1:8000/api/HR/user/create', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
        })

       history.push('/HR/user/list');
    } */
    const addUser = async () => {
        await axios.post('http://127.0.0.1:8000/api/HR/user/create', {
            firstname,
            lastname,
            username,
            email,
            phone,
            address,
            gender,
            position,
            type,
            pass,
            work_hour
           
            
        },{
            headers: {
                'ContentType': 'application/json'
            }
        }).then((response)=>{
            console.log(response.data);
            history.push('/HR/user/list');
        });
 
        //console.log(profile_pic.name);

    }
    const gen=["male","female"];
    return(
        <>
            <div className="title text-center mb-3">
                <h3 className="font-width-border">Add User</h3>
            </div>
            <hr></hr>
            <div className=" w-50  m-auto">
    
                <div className="form-group">
                    <label>First Name</label> 
                    <input type="txt" className="form-control" id="firstname" name="firstname" onChange={(e)=>setFirstName(e.target.value)} ></input>
                </div>    
                <div className="form-group">
                    <label >Last Name</label> 
                    <input type="txt" className="form-control" id="lastname" name="lastname" onChange={(e)=>setLastName(e.target.value)}></input>
                </div>
                <div className="from-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" name="username" id="uname" onChange={(e)=>setUserName(e.target.value)}></input>
                </div>
                {/* <div className="from-group">
                    <label>Organization Id</label>
                    <input type="number" className="form-control" name="organization_id" id="organization_id"></input>
                </div> */}

                <div className="form-group">
                    <label>password</label>
                    <input type="password" className="form-control"  name="pass" id="password" onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Confirm password</label>
                    <input type="password" className="form-control"  name="confirm_password" id="password"></input>
                </div>
                <div className="from-group">
                    <label>Gender </label><br></br>
                    {  
                        gen.map(gender=>(
                            <>
                            <input type="radio" name="gender" onChange={(e)=>setGender(e.target.value)} value={gender}></input>
                            <b>{gender}</b>
                            </>
                        ))
                    }
                </div>
                
                <div className="form-group">
                    <label>User Type</label>
                        <select name="type" id="super" class="form-control" onChange={(e)=>setType(e.target.value)}>
                        <option value="product">Product manager</option>
                        <option value="hr">HR manager</option>
                        <option value="finance">Finance manager</option>
                        <option value="sales">Sales manager</option>
                        </select>
                </div>
                <div className="foem-group">
                    <label>Present address</label>
                    <input type="text" className="form-control" id="presentaddress" name="address" onChange={(e)=>setAddress(e.target.value)}></input>
                </div>
                <div className="from-group">
                    <label>Phone</label>
                    <input type="number" className="form-control" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" onChange={(e)=>setPhone(e.target.value)}></input>
                </div>
                <div className="from-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="EmailId" name="email"onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className="from-group">
                    <label>Job Position</label> 
                    <input type="txt" className="form-control" id="position" name="position" onChange={(e)=>setPosition(e.target.value)}></input>
                </div>
                <div class="form-group">
                    <label>Hour Worked(Per week)</label> 
                    <input type="txt" class="form-control" id="worked" name="work_hour"onChange={(e)=>setHour(e.target.value)}></input>
                </div>
                <br></br>
                <div className="from-group">
                    <td>Upload Image: </td>
                    <td colspan='2'>
                    <input type="file" name="profile_pic"></input>
                    </td>
                </div>
                <div className="from-group">
                    <center><button onClick={addUser} className="btn btn-outline-primary btn-block w-50 mt-3" type="submit">Add User</button></center>
                </div>
            </div>
            

        </>
    )
}
export default AddUser;
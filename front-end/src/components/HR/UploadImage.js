import { useHistory} from 'react-router-dom'
import { useState } from 'react';
import { React } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const UploadImage=()=>{
    const [errorMessage,setErrorMessage] = useState("");
    const [profile_pic,setPhoto] = useState("");
    const [current_password,setCurrentPass] = useState("");
    const history = useHistory();
    const updateImage = async () =>{
        if(profile_pic.length===0)
        {
            setErrorMessage("Upload image must be required");
        }else if(current_password.length===0)
        {
            setErrorMessage("Current Password required");
        }else if(current_password.length<8)
        {
            setErrorMessage("Current password at least 8 Charecters");
        }
        else{
            await axios.put('http://127.0.0.1:8000/api/HR/upload/image/'+localStorage.getItem('username'), {
            profile_pic,current_password
            },{
                headers: {
                    'ContentType': 'application/json'
                }
            }).then((response)=>{
                console.log(response.data);
                history.push('/HR/user/profile');
            });
            
        }
    }
    return (
        <>
            <div className="title text-center mb-3">
                <h3 className="font-width-border">Upload Image</h3>
            </div>
            <hr></hr>
            {errorMessage && (
            <center>
              {" "}
              <div class="alert alert-danger col-5" role="alert">
                {errorMessage}
              </div>{" "}
            </center>
            )}
            <div className="border w-50 m-auto">
                   
                <Table className="table table-hover">
                    <tbody>
                        <div className="from-group">
                            <td>Upload Image: </td>
                            <td colSpan='2'>
                                <input type="file" name="profile_image" onChange={(e)=>setPhoto(e.target.files[0])}></input>
                            </td>
                        </div>
                        <div className="from-group">    
                            <tr>
                                <td >Current Password: </td>
                                <td ><input type="password" className="form-control" name="current_password" onChange={(e)=>setCurrentPass(e.target.value)} ></input></td>
                            </tr>
                            
                        </div>
                        
                        <tr>
                            <td colSpan='2' align='center'>
                                <button onClick={updateImage} type="submit" class="btn btn-dark" >Upload</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>    
            </div>
        
        </>

    )
}
export default UploadImage;
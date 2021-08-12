import { useHistory} from 'react-router-dom'
import { useState } from 'react';
import { React } from 'react';
import axios from 'axios';

const Expense=()=>{
    const [name,setName] = useState("");
    const [catagory,setCatagory] = useState("");
    const [amount,setAmount] = useState("");
    const [description,setDescription] = useState("");
    const [expense_date,setExpenseDate] = useState("");
    const history = useHistory();

    const addExpense = async () => {
        await axios.post('http://127.0.0.1:8000/api/HR/expense/report', {
            name,catagory,amount,description,expense_date
        },{
            headers: {
                'ContentType': 'application/json'
            }
        })
        //history.push('/HR/employee/list');
    }
    return(
        <>
            <div className="w-50  m-auto">
            
                <div className="from-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" id="user" onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Catagory</label> 
                    <input type="txt" className="form-control" id="catagory" name="catagory" onChange={(e)=>setCatagory(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label >Amount</label> 
                    <input type="number" className="form-control" id="amount" name="amount" onChange={(e)=>setAmount(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea type="text" className="form-control" name="description" id="description" onChange={(e)=>setDescription(e.target.value)}></textarea>
                </div>
                <div className="from-group">
                    <label>Expense Date</label>
                    <input type="date" className="form-control" id="expense_date" name="expense_date" onChange={(e)=>setExpenseDate(e.target.value)}></input>
                </div>
                <div className="from-group">
                    <center><button onClick={addExpense} className="btn btn-outline-primary btn-block w-50 mt-3" type="submit">Create</button></center>
                </div>
        </div>
        </>
    )
}
export default Expense;
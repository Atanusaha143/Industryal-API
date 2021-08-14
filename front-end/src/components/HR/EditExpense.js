import { useHistory, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

const EditExpense=()=>{
    const [name,setName] = useState("");
    const [catagory,setCatagory] = useState("");
    const [amount,setAmount] = useState("");
    const [description,setDescription] = useState("");
    const [expense_date,setExpenseDate] = useState("");
    const history = useHistory();
    const {id:eid} = useParams();

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/HR/expense/"+eid)
        .then(function (response) {
            const result = response.data;
            setName(result.name);
            setCatagory(result.catagory);
            setAmount(result.amount);
            setDescription(result.description);
            setExpenseDate(result.expense_date);
        });
    },[])

    const updatedExpense = async () => {
        await axios.put('http://127.0.0.1:8000/api/HR/expense/update/'+eid,{
           name,catagory,amount,description,expense_date
        },{
            headers: {
                'ContentType': 'application/json'
            }
        })
        history.push('/HR/expense/list');
    }

    return(
        <>
        <div className="title text-center mb-3">
            <h3 className="font-width-border">Update Expense Report</h3>
        </div>
        <hr></hr>
        <div className="w-50  m-auto">
            
            <div className="from-group">
                <label>Name</label>
                <input type="text" className="form-control" name="name" id="user" value={name} onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Catagory</label> 
                <input type="txt" className="form-control" id="catagory" name="catagory" value={catagory} onChange={(e)=>setCatagory(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label >Amount</label> 
                <input type="number" className="form-control" id="amount" name="amount" value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea type="text" className="form-control" name="description" id="description" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
            </div>
            <div className="from-group">
                <label>Expense Date</label>
                <input type="date" className="form-control" id="expense_date" name="expense_date" value={expense_date} onChange={(e)=>setExpenseDate(e.target.value)}></input>
            </div>
            <div className="from-group">
                <center><button onClick={updatedExpense} className="btn btn-outline-primary btn-block w-50 mt-3" type="submit">Update</button></center>
            </div>
        </div>
        </>
    )
}
export default EditExpense;
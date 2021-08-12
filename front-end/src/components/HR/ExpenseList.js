import { useState , useEffect } from 'react';
import { React } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

const ExpenseList=()=>{
    const[list,setList] = useState([]);
    useEffect( async ()=>{
        let result = await fetch("http://127.0.0.1:8000/api/HR/expense/list");
        result = await result.json();
        setList(result);
    },[])

    return(
        <>
            <Table  className="table table-hover ">
                <thead>
                    <tr>
                        <th> Name</th>
                        <th>Catagory</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Expense Date</th>
                        <th>Action</th> 
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((exp)=>
                        <tr>
                            <td>{exp.name}</td>
                            <td>{exp.catagory}</td>
                            <td>{exp.amount}</td>
                            <td>{exp.description}</td>
                            <td>{exp.expense_date}</td>
                            <td>
                                <Link to={`/HR/expense/edit/${exp.id}`} class="btn btn-success m-1"> Edit </Link>
                                <Link to={`/HR/expense/delete/${exp.id}`} class="btn btn-danger m-1"> Delete </Link>
                            
                            </td>
                        </tr>
                        
                    )
                }
                    
                </tbody>
            </Table>
        </>
    )
}
export default ExpenseList;    
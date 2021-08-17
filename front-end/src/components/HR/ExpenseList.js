import { useState , useEffect } from 'react';
import { React } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaListAlt } from "react-icons/fa";


const ExpenseList=()=>{
    const[list,setList] = useState([]);
    useEffect( async ()=>{
        let result = await fetch("http://127.0.0.1:8000/api/HR/expense/list");
        result = await result.json();
        setList(result);
    },[])

    return(
        <>
            <div className="title text-center mb-3">
                <h3 className="font-width-border"><FaListAlt />Expense Report List</h3>
            </div>
            <hr></hr>
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
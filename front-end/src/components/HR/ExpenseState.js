import { Card } from 'react-bootstrap';
import { React } from 'react';

const ExpenseState=()=>{
    return(
        <>
            <div className="title text-center mb-3">
                <h3 className="font-width-border">Expense Statistic</h3>
            </div>
                <hr></hr>
            <Card className="border border-dark mr-5 ">
                <center> <div><h1>Expense Report Statistic</h1></div></center>
            </Card>
        </>
    )
}
export default ExpenseState;
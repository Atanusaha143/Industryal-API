import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { React } from 'react';
import AddUser from './AddUser';
import Home from './Home';
import UserList from './UserList';
import EditUser from './EditUser';
import AddEmployee from './AddEmployee';
import AddGroup from './AddGroup';
import EmployeeList from './EmployeeList';

const Navb=({title})=>{
    return(
        <>
            <header>
                <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="/HR">Industryal</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            </Nav>
                            <Nav>
                            <Nav.Link href="#home">Profile</Nav.Link>
                            <Nav.Link href="#link">Logout</Nav.Link>
                            
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            
            <div className="row">
                <div className="col-2" >
                <br></br>
                    <Nav className=" navbar border-dark">
                        
                        <ul className="navbar-nav ml-2">
                            <li className="nav-item"><Link to='/HR/user/create' className="nav-link btn btn-outline-dark btn-block btm-sm ml-5 mt-2 " >New user</Link></li>
                            <li className="nav-item"><Link to='/HR/user/list' className="nav-link btn btn-outline-dark btn-block mt-2" >User List</Link></li>
                            <li className="nav-item"><Link to='/HR/employee/create' className="nav-link btn btn-outline-dark btn-block mt-2" >New Employee</Link></li>
                            <li className="nav-item"><Link to='/HR/employee/group' className="nav-link btn btn-outline-dark btn-block mt-2" >Add group</Link></li>
                            <li className="nav-item"><Link to='/HR/employee/list' className="nav-link btn btn-outline-dark btn-block mt-2" >Employee List</Link></li>
                            <li className="nav-item"><Link to='/HR/employee/schedule' className="nav-link btn btn-outline-dark btn-block mt-2" >Schedules</Link></li>
                            <li className="nav-item"><Link to='/HR/leave/request' className="nav-link btn btn-outline-dark btn-block mt-2" >Leave Request</Link></li>
                            <li className="nav-item"><Link to='/HR/leave/request/list' className="nav-link btn btn-outline-dark btn-block mt-2" >Leave Request List</Link></li>
                            <li className="nav-item"><Link to='/HR/expense/report' className="nav-link btn btn-outline-dark btn-block mt-2" > Expense Report</Link></li>
                            <li className="nav-item"><Link to='/HR/expense/list' className="nav-link btn btn-outline-dark btn-block mt-2" > Expense  Report List</Link></li>
                            <li className="nav-item"><Link to='/HR/expense/statistic' className="nav-link btn btn-outline-dark btn-block mt-2" >Expense Statistic</Link></li>
                        </ul>
                    </Nav>
                </div>
                <div className="col-10">
                    <div className="info-section p-3 text-black ">
                        <div className="title text-center mb-3">
                            <h3 className="font-width-border">{title}</h3>
                        </div>
                        <hr></hr>
                        {(()=>{
                            if(title === 'Pie Chart')
                            {
                                return(
                                    <Home />
                                )
                            }
                            else if (title==='New User')
                            {
                                return(
                                    <AddUser />
                                )
                            }
                            else if (title==='User List')
                            {
                                return(
                                    <UserList />
                                )
                            }
                            else if(title ==='Update User')
                            {
                                return(
                                    <EditUser />
                                )
                            }
                            else if(title ==='New Employee')
                            {
                                return(
                                    <AddEmployee />
                                )
                            }
                            else if(title==='New Group')
                            {
                                return(
                                    <AddGroup />
                                )
                            }
                            else if(title==='Employee List')
                            {
                                return(
                                    <EmployeeList />
                                )
                            }
                        })()}
                    </div>
                </div>
            </div>            
            <footer className="bg-dark text-white mt-2 p-2">
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <p class="lead text-center">
                            Copyright &copy; &nbsp;
                            <span id="year">2020-2021</span> -
                            Industryal
                        </p>
                        </div>
                    </div>
                </div>
            </footer>           
        </>
    )

}
export default Navb;
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { React } from 'react';

const ProfileNav=()=>{
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
                            <li className="nav-item"><Link to='#' className="nav-link btn btn-outline-dark btn-block btm-sm ml-5 mt-2 " >Edit Profile</Link></li>
                            <li className="nav-item"><Link to='#' className="nav-link btn btn-outline-dark btn-block mt-2" >Change Password</Link></li>
                            <li className="nav-item"><Link to='#' className="nav-link btn btn-outline-dark btn-block mt-2" >Upload Profile Pic</Link></li>
                            
                        </ul>
                    </Nav>
                    </div>
                <div className="col-10">
                    <div className="info-section p-3 text-black ">
                        {(()=>{
                            /* if(title === 'Pie Chart')
                            {
                                return(
                                    <Home />
                                )
                            } */
                        })()} 

                    </div>
                </div>
            </div>        
            
        
        </>
    )
}
export default ProfileNav;
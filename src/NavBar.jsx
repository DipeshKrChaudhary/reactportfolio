import React from "react";
import Col from 'react-bootstrap/Col';
import { Navbar, Nav } from 'react-bootstrap';
class NavBar extends React.Component {
    render() {
      return (
        <>
            
          <nav className="navbar bg-light navbar-light navbar-expand-sm justify-content-end sticky-top">
            
            <Col>
            <h5>Dipesh Chaudhary</h5>
             </Col>
              <Navbar  bg="light"  expand="lg" >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link className=" active" href="#home">Home</Nav.Link>
                  <Nav.Link href="#resume">Resume</Nav.Link> 
                  <Nav.Link href="#projects">Project</Nav.Link> 
                  <Nav.Link href="#contact">Contact</Nav.Link>  
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </nav>
        {/* <nav className="navbar bg-light navbar-light navbar-expand-sm justify-content-end sticky-top">
            <div className="navbar-nav ">
            <a className="nav-item nav-link active" href="#">Home</a>
            <a className="nav-item nav-link" href="#resume">Resume</a>
            <a  className="nav-item nav-link" href="#">Contact</a>
            </div>
        </nav> */}
        </>
      )
    
    }
  }
  

export default NavBar;


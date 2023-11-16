import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const QuizNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Quiz Master</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Create</Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
            <NavDropdown title="Questions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">View</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.3">Add</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default QuizNav;
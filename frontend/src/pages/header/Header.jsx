import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant='dark'>
        <Container>
            <Navbar.Brand href="/">Employee Management System</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/employee">Add Employee</Nav.Link>
                {/* <Nav.Link as={Link} href="/view">View Employee</Nav.Link> */}
            </Nav>
        </Container>

      </Navbar>
    </>
  )
}

export default Header

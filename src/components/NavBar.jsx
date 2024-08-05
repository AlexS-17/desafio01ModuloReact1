// import React from 'react'
// recordar condición ? true : false
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormatoMiles from './FormatoMiles';

const NavBar = () => {
    const total = 25000;
    const token = false;

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Pizzeria Mamma Mia!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item className="cls-item-spacing">
                            <Button variant="outline-light" size="sm">🍕Home</Button>
                        </Nav.Item>
                        <Nav.Item className="cls-item-spacing">
                            <Button variant="outline-light" size="sm">{token ? '🔓Profile' : '🔐Login'}</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button variant="outline-light" size="sm">{token ? '🔒Logout' : '🔐Register'}</Button>
                        </Nav.Item>
                    </Nav>
                    <Nav className="ml-auto">
                        <Button variant="outline-info" size="sm">🛒Total: $<FormatoMiles numero={total} /></Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;


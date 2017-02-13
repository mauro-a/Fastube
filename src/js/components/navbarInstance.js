import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';


const navbarInstance = () => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#"><i>Fastube</i></a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullLeft>
                    <NavItem eventKey={1} href="#">
                        <input type="search" placeholder="Your search ..." />
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Sign in</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default navbarInstance;
import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import 'containers/App.css';
import location from 'images/map.svg';

class MyNavbar extends Component {
  render() {
    return (
      <Navbar className="shadow">
        <Navbar.Header>
          <Navbar.Brand>Priya Shah</Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem href="https://www.uwishunu.com/">
            <img className="icon" src={location} alt="locations" />
            Philadelphia, PA
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
export default MyNavbar;

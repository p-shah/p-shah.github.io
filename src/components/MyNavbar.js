import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import 'containers/App.css';
import location from 'images/map.svg'

class MyNavbar extends Component {
  render() {
    return(
      <Navbar className="shadow">
        <Nav>
          <Navbar.Brand>Priya Shah</Navbar.Brand>
        </Nav>
        <Nav pullRight>
            <NavItem>
              <a href="https://www.uwishunu.com/" rel="noopener noreferrer" target="_blank"><img className="icon" src={location} alt="location"/></a>
                Philadelphia, PA
            </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
export default MyNavbar;

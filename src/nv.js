import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


export default class nv extends React.Component {
  render() {
    return (
      <div>
        <Nav className = "nav">
          <NavItem>
            <NavLink href="#" className = "link">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className = "link">About</NavLink>
          </NavItem>
          
        </Nav>
         
      </div>
    );
  }
}


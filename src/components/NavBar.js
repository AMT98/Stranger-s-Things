import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { NavLink } from "react-router-dom";

const NavBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand={"xl"}>
        <NavbarBrand href="/">Stranger's Things</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink 
                activeClassName='activeNavLinks' 
                className="navLinks" 
                to="/home"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
               <NavLink 
                activeClassName='activeNavLinks' 
                className="navLinks" 
                to="/posts"
              >
                POSTS
              </NavLink>
            </NavItem>
          </Nav>
          
          <UncontrolledDropdown 
          nav inNavbar
          className = "profileNav"
          >
            <DropdownToggle nav caret>
              PROFILE
            </DropdownToggle>
            <DropdownMenu start>
              <DropdownItem>Inbox</DropdownItem>
              <DropdownItem>Sent Messages</DropdownItem>
              <DropdownItem divider />
              {/* change true to state value that determines if the user is logged in or not */}
              { true ? ( 
                <>
                  <DropdownItem>Log In</DropdownItem>
                  <DropdownItem>Sign Up</DropdownItem>
                </>
                ): (
                  null
                )
              }
              
            </DropdownMenu>
          </UncontrolledDropdown>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
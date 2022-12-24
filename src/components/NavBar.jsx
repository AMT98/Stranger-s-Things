import React, { useState, useEffect } from "react";
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
} from "reactstrap";
import { NavLink, useHistory } from "react-router-dom";

const NavBar = () => {
  console.log(localStorage.getItem('token'));
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    history.push("/");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("authorid");
    history.push("/home");
    window.location.reload()
  };
  const handleSignup = () => {
    history.push("/signup");
    
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  });
  return (
    <div>
      <Navbar expand={"xl"}>
        <NavbarBrand href={isLoggedIn ? "/posts" : "/" }>
          Stranger's Things
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink
                activeClassName="activeNavLinks"
                className="navLinks"
                to="/home"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                activeClassName="activeNavLinks"
                className="navLinks"
                to="/posts"
              >
                POSTS
              </NavLink>
            </NavItem>
          </Nav>
          <UncontrolledDropdown nav inNavbar className="profileNav">
            <DropdownToggle nav caret>
              PROFILE
            </DropdownToggle>
            <DropdownMenu start>
              {localStorage.getItem('token') && (
                <>
                  <DropdownItem>Inbox</DropdownItem>
                  <DropdownItem onClick={() => history.push("/home")}>
                    Sent Messages
                  </DropdownItem>
                </>
              )}
              <>
              <DropdownItem>
                {localStorage.getItem('token') ? (
                    <h6 className="logInLogOutBtn" onClick={handleLogout}>
                      log Out
                    </h6>
                ) : (
                  <h6 onClick={handleLogin} className="logInLogOutBtn">
                      Log In
                    </h6>
                )}
                </DropdownItem>

                <DropdownItem onClick={handleSignup}>Sign Up</DropdownItem>
              </>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

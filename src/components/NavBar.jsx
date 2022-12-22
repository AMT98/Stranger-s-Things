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

const NavBar = (args) => {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  const handleLogin = () => {
    history.push("/");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("authorid");
    history.push("/home");
  };
  const handleSignup = () => {
    history.push("/signup");
  };

  return (
    <div>
      <Navbar expand={"xl"}>
        <NavbarBrand href={localStorage.getItem('token') ? "/posts" : "/"}>
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
              {localStorage.getItem('token') ?
              <>
              <DropdownItem>Inbox</DropdownItem>
              <DropdownItem>Sent Messages</DropdownItem>
              </>
              : null} 
              <DropdownItem divider />
              {/* change true to state value that determines if the user is logged in or not */}
              {true ? (
                <>
                  <DropdownItem>
                    {localStorage.getItem('token') ? (
                      <button className="logInLogOutBtn" onClick={handleLogout}>
                        log Out
                      </button>
                    ) : (
                      <button onClick={handleLogin} className="logInLogOutBtn">
                        Log In
                      </button>
                    )}
                  </DropdownItem>
                  <DropdownItem onClick={handleSignup}>Sign Up</DropdownItem>
                </>
              ) : null}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

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
    history.push("/");
  };
  const handleSignup = () => {
    history.push("/signup");
  };

  return (
    <div>
      <Navbar expand={"xl"}>
        <NavbarBrand href={token ? "/posts" : "/"}>
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
              <DropdownItem>Inbox</DropdownItem>
              <DropdownItem>Sent Messages</DropdownItem>
              <DropdownItem divider />
              {/* change true to state value that determines if the user is logged in or not */}
              {true ? (
                <>
                  <DropdownItem>
                    {token ? (
                      <button className="logInLogOutBtn" onClick={handleLogout}>
                        {token ? "Log Out" : "Log In"}
                      </button>
                    ) : (
                      <button onClick={handleLogin} className="logInLogOutBtn">
                        {token ? "Log Out" : "Log In"}
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

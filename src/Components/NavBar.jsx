import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className="nav">
        <NavbarBrand
          href="/"
          style={{
            color: "white",
            fontWeight: "700",
            fontSize: "25px",
            marginTop: "-5px"
          }}
        >
          PowerDex
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                style={{ color: "rgb(199, 199, 199)" }}
                href="/components/"
              >
                Components
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "rgb(199, 199, 199)" }}
                href="https://github.com/reactstrap/reactstrap"
              >
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{ color: "rgb(199, 199, 199)" }}>
                Options
              </DropdownToggle>
              <DropdownMenu right style={{ backgroundColor: "#121212" }}>
                <DropdownItem style={{ color: "rgb(199, 199, 199)" }}>
                  Option 1
                </DropdownItem>
                <DropdownItem style={{ color: "rgb(199, 199, 199)" }}>
                  Option 2
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
          <input className="search" placeholder="Search Here.." />
          <button className="search-btn">
            <i class="fa fa-search" style={{ color: "#89ff00" }}></i>
          </button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;

import React from "react";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import learnItLogo from "../../assets/logo.svg";
import logoutIcon from "../../assets/logout.svg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <NavBar expand="lg" bg="primary" variant="dark" className="shadow">
      <NavBar.Brand className="font-weight-bolder text-white">
        <img
          src={learnItLogo}
          alt="learnItLogo"
          width="32"
          height="32"
          className="mr-2"
        ></img>
        SearchApp
      </NavBar.Brand>
      <Nav.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/dashboard"
            as={Link}
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/about"
            as={Link}
          >
            About
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="font-weight-bolder text-white" disabled>
            Welcome Duy
          </Nav.Link>
          <Button variant="secondary" className="font-weight-bolder text-white">
            <img
              src={logoutIcon}
              alt="logoutIcon"
              width={32}
              height={32}
              className="mr-2"
            ></img>
            Logout
          </Button>
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  );
};

export default NavbarMenu;

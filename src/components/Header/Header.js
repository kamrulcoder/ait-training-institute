import Button from "@restart/ui/esm/Button";
import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Image,
  
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/logo.png"
import classes from "./Header.module.css"

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className={classes.header}>
      <Container>
        <Navbar.Brand as={NavLink} to="/"><Image  className ={classes.logo} src={logo}></Image></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav "  className="justify-content-end">
          <Nav >
            <Nav.Link  exact activeClassName={classes.navlinkActive} className={classes.navlink}  as={NavLink} to="/"> Home </Nav.Link>            
            <Nav.Link exact activeClassName={classes.navlinkActive} className={classes.navlink}  as={NavLink} to="/faq">FAQ</Nav.Link>
                       
            <Nav.Link exact activeClassName={classes.navlinkActive} className={classes.navlink}  as={NavLink} to="/courses">Courses</Nav.Link>

            <Nav.Link exact activeClassName={classes.navlinkActive} className={classes.navlink}  as={NavLink} to="/about">About Us</Nav.Link>
            <Nav.Link exact activeClassName={classes.navlinkActive} className={classes.navlink}  as={NavLink} to="/contact">Contact </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

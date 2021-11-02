import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import classes from "./Footer.module.css";
import footerImg from "../../img/ssl-commerce.1d268dce.png";

const Footer = () => {
  return (
    <div className={classes.footerArea}>
      <Container>
        <Row>
          <Col lg={3}>
            <div className={classes.footerlogo}>
              <NavLink exact to="/">
                <Image src={logo} lat="image  not found "></Image>
              </NavLink>
            </div>
          </Col>
          <Col lg={3}>
            <ul className={classes.footerNav}>
              <li>
                <NavLink exact to="/">
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/">
                  Terms and Conditions
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <div className={classes.footerSocialArea}>
              <h4>Follow us</h4>
              <ul className={classes.footerSocial}>
                <li>
                  <a href="#">
                    <span>
                      <i className="fab fa-facebook-f"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <i class="fab fa-google"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <i class="fab fa-skype"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <i class="fab fa-youtube"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3}>
            <div className="footerImg">
              <Image src={footerImg}></Image>
            </div>
          </Col>
        </Row>
        <div className={classes.copyrightArea}>
          <p>Copyright © 2021 ait.edu.bd</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

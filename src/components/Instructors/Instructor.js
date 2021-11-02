import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import instructor1 from "../../img/instructor1.png";
import Divider from "../../components/extraComponents/Divider";

import classes from "./instructor.module.css";
import Pulse from 'react-reveal/Pulse';



const Instructor = () => {
  return (
    <div className={classes.instructorArea}>
      <Container>
      <Pulse  top>
        <div className={classes.instructorHeader}>
          <h2>Class Instructors</h2>
          <Divider></Divider>
          <p>
            The cost of receiving higher education in the United States has
            skyrocketed to impossible.
          </p>
        </div>
        </Pulse>
        <Row className="justify-content-center">
          <Col lg={3}>
          <Pulse  >
            <div className={classes.singleInstructor}>
              <div className={classes.insructorImg}>
                <Image src={instructor1} alt="Image not found " />
              </div>
              <div className={classes.instructorText}>
                <h4>Mahmoud Fatma</h4>
                <p>Frontend Developer </p>
              </div>

              <ul class={classes.tlUserSocials}>
                <li class="social-facebook">
                  <a href="https://www.facebook.com" target="_blank">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="social-twitter">
                  <a href="https://twitter.com" target="_blank">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="social-google">
                  <a href="https://www.google.com" target="_blank">
                    <i class="fab fa-google"></i>
                  </a>
                </li>
              </ul>
            </div>
            </Pulse>
          </Col>
          <Col lg={3}>
          <Pulse >
            <div className={classes.singleInstructor}>
              <div className={classes.insructorImg}>
                <Image src={instructor1} alt="Image not found " />
              </div>
              <div className={classes.instructorText}>
                <h4>Mahmoud Fatma</h4>
                <p>Frontend Developer </p>
              </div>

              <ul class={classes.tlUserSocials}>
                <li class="social-facebook">
                  <a href="https://www.facebook.com" target="_blank">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="social-twitter">
                  <a href="https://twitter.com" target="_blank">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="social-google">
                  <a href="https://www.google.com" target="_blank">
                    <i class="fab fa-google"></i>
                  </a>
                </li>
              </ul>
            </div>
            </Pulse>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Instructor;

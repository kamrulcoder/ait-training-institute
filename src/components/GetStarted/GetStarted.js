import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import classes from "./getStarted.module.css"
import  getStartedIimg from "../../img/training-thumb.png"

const GetStarted = () => {
  return (
    <div className={classes.getStartedArea}>
      <Container>
        <Row>
          <Col lg={4}>
            <div className={classes.getStartedImg}>
                <Image src={getStartedIimg} />
            </div>
          </Col>
          <Col lg={8}>
            <div className={classes.getStartedText}>
              <h2> Get The Coaching Training</h2>
              <p>By Simon Jones Almost Free</p>
              <ul className={classes.countdown}>
                <li>
                  <span className="days">195</span>
                  <p className="days_ref">days</p>
                </li>
                <li>
                  <span className="hours">20</span>
                  <p className="hours_ref">hours</p>
                </li>
                <li>
                  <span className="minutes">34</span>
                  <p className="minutes_ref">minutes</p>
                </li>
                <li>
                  <span className="seconds last">17</span>
                  <p className="seconds_ref">seconds</p>
                </li>
              </ul>
              <h6>It’s Limited Seating! Hurry Up</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GetStarted;

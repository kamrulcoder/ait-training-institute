
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import heroImg from "../../img/heroleft.png";
import classes from "./Home.module.css";
import Fade  from 'react-reveal/Fade';


const HeroSection = () => {
  return (
    <div className={classes.heroSection}>

          {/* <h1>React Reveal</h1> */}
      
      <Container>
        <Row  className="align-items-center">
          <Col lg={6}>
          <Fade  left>
            <div className="heroImg">
              <Image src={heroImg} />
            </div>
            </Fade>
          </Col>
          <Col lg={6}>
          <Fade  right>
            <div className="heroText">
              <h2>EDUCATE! SMART IS GREAT</h2>
              <p>
              Can'their wherein own upon female without saying made in second
                the male Own you. Him fill good seasons hath Can'their wherein own upon female without saying made in second
                the male Own you. Him fill good seasons hath Can'their wherein own upon female without saying made in second
                the male Own you. Him fill good seasons hath
              </p>
              <Button>Register </Button>
            </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;

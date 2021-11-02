import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Divider from "../extraComponents/Divider";
import classes from "./Home.module.css";

import img1 from "../../img/f1.png";
import img2 from "../../img/f2.png";
import img3 from "../../img/f3.png";

import Zoom from 'react-reveal/Zoom';
import LightSpeed  from 'react-reveal/LightSpeed';




const BestFacilites = () => {
  return (
    <div className={classes.bestFacilitesArea}>
      <Container>
        <div className={classes.aboutCourseHeader}>
        <LightSpeed  top>
          <h2>Best Facilites </h2>
          <Divider />
          </LightSpeed>
        </div>
        <Row>
          {/* facilitiest  single  item start  */}
          <Col lg={4}>
            <div className={classes.facilitiest}>
            <Zoom left>

              <div className="icon">
                <Image src={img1} />
                <h5>Unlimited Access</h5>
                <p>
                  Choose what you’d like to learn from our extensive
                  subscription library.
                </p>
              </div>
              </Zoom>
            </div>
          </Col>


          <Col lg={4}>
            <div className={classes.facilitiest}>
            <Zoom top>

              <div className="icon">
                <Image src={img2} />
                <h5>Expert Teachers</h5>
                <p>
                  Choose what you’d like to learn from our extensive
                  subscription library.
                </p>
              </div>
              </Zoom>
            </div>
          </Col>

          
          <Col lg={4}>
            <div className={classes.facilitiest}>
            <Zoom right>
              <div className="icon">
                <Image src={img3} />
                <h5>Online Education</h5>
                <p>
                  Choose what you’d like to learn from our extensive
                  subscription library.
                </p>
              </div>
              </Zoom>
            </div>
          </Col>

          {/* facilitiest  single  item start  */}

         
        </Row>
      </Container>
    </div>
  );
};

export default BestFacilites;

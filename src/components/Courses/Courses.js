import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Divider from "../extraComponents/Divider";
import classes from "./Courses.module.css";
// import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide'
const Courses = () => {
  return (
    <div className={classes.courseArea}>
      <Container>
        <div className={classes.courseHeader}>
        <Slide bottom >
          <h2>All Premium Course </h2>
          </Slide>
          <Divider />
        </div>
        {/* <Fade  top> */}
        <div className={classes.courseSingle}>
          <Row>
            <Col lg={4}>
              <div className={classes.corseImg}>
                <Image
                  src="https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png"
                  alt="Image not found "
                />
              </div>
            </Col>
            <Col lg={8}>
              <div className={classes.courseSingleText}>
                <div className={classes.courseCatagory}>
                  <a href="#">Web Development</a>
                </div>
                <h3 className={classes.courseTitle}>
                  Advance CSS Flexbox Tutorial Guide
                </h3>
                <ul className={classes.courseWrapMeta}>
                  <li><span>
                      <i class="fas fa-clock" />
                    </span>{" "}
                    10 weeks
                  </li>
                  <li><span>
                      <i class="fas fa-sort-amount-up-alt" />
                    </span>
                    All levels
                  </li>
                  <li>
                    <span>
                      <i class="far fa-copy" />
                    </span>
                    lessons
                  </li>
                  <li>
                   <span>
                      <i class="fas fa-user-graduate" />
                    </span>
                    students
                  </li>
                </ul>
                <p>
                  Course Description Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem…
                </p>
                <div class={classes.coursefooter}>
                  <div class="course-price">
                    <span>Premium</span>
                  </div>
                  <div class="course-readmore">
                    <a href="#">View More</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* </Fade> */}
        {/* <Fade> */}
        <div className={classes.courseSingle}>
          <Row>
            <Col lg={4}>
              <div className={classes.corseImg}>
                <Image
                  src="https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png"
                  alt="Image not found "
                />
              </div>
            </Col>
            <Col lg={8}>
              <div className={classes.courseSingleText}>
                <div className={classes.courseCatagory}>
                  <a href="#">Office  Application  </a>
                </div>
                <h3 className={classes.courseTitle}>
                  Advance CSS Flexbox Tutorial Guide
                </h3>
                <ul className={classes.courseWrapMeta}>
                  <li><span>
                      <i class="fas fa-clock" />
                    </span>{" "}
                    10 weeks
                  </li>
                  <li><span>
                      <i class="fas fa-sort-amount-up-alt" />
                    </span>   All levels
                  </li>
                  <li>
                    <span>
                      <i class="far fa-copy" />
                    </span>  lessons
                  </li>
                  <li>
                   <span>
                      <i class="fas fa-user-graduate" />
                    </span>  students
                  </li>
                </ul>
                <p>
                  Course Description Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem…
                </p>
                <div class={classes.coursefooter}>
                  <div class="course-price">
                    <span>Premium</span>
                  </div>
                  <div class="course-readmore">
                    <a href="#">View More</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* </Fade> */}
      </Container>
    </div>
  );
};

export default Courses;

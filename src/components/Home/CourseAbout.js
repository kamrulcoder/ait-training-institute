import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Divider from '../extraComponents/Divider';
import classes from "./Home.module.css"
import "./style.css"
import courseAbout from "../../img/courseAbout.jpg"
import Slide from 'react-reveal/Slide';




const CourseAbout = () => {
    return (
        <div className={classes.aboutCourse}>
            <Container>
                <div className={classes.aboutCourseHeader}>
                    <Slide top>
                        <h2>About Course </h2>
                        <Divider />
                    </Slide>
                </div>
                <Row>
                    <Col lg={6}>
                        <Slide left>
                            <div className="aboutCoursecontent">

                                {/* course about item   start */}

                                <div className={classes.courseAboutItem}>
                                    <div className={classes.courseicon}>
                                        <span><i className="far fa-clipboard"></i></span>
                                    </div>
                                    <div className={classes.courseText}>
                                        <h4>24 Hours of expert-created video tutorials</h4>
                                        <p>Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim consectet adipisi elit, sed do consectet adipisi elite. Et elementum vulputate vivamus.</p>
                                    </div>
                                </div>

                                {/* course about item  end  */}

                                {/* course about item   start */}
                                <div className={classes.courseAboutItem}>
                                    <div className={classes.courseicon}>
                                        <span><i className="fas fa-laptop-house"></i></span>
                                    </div>
                                    <div className={classes.courseText}>
                                        <h4>Practice to reinforce what you learned .</h4>
                                        <p>Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim consectet adipisi elit, sed do consectet adipisi elite. Et elementum vulputate vivamus.</p>
                                    </div>
                                </div>
                                {/* course about item  end  */}



                                {/* course about item   start */}
                                <div className={classes.courseAboutItem}>
                                    <div className={classes.courseicon}>
                                        <span><i className="fas fa-volume-up"></i></span>
                                    </div>
                                    <div className={classes.courseText}>
                                        <h4>Advance your career</h4>
                                        <p>Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim consectet adipisi elit, sed do consectet adipisi elite. Et elementum vulputate vivamus.</p>
                                    </div>
                                </div>
                                {/* course about item  end  */}
                            </div>
                        </Slide>
                    </Col>
                    <Col lg={6}>
                        <Slide right>
                            <div className={classes.courseAboutImg}>
                                <Image src={courseAbout}></Image>
                            </div>
                        </Slide>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseAbout;
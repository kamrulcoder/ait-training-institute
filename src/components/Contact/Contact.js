import { TextField, Box, Divider, List, Button } from "@mui/material";

import classes from "./contact.module.css";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slide from 'react-reveal/Slide';



const Contact = () => {
  return (
    <div className="contactArea">
      <div className={classes.contactHeader}>      
      <h2>Contact Us </h2>        
      </div>
      <Container>
        <div className={classes.contactContent}>
          <Row>
            <Col lg={7}>
            <Slide  left>
              <div className="contactForm">
                <h3>Get In Touch</h3>
                <p>আপনার  কোনো প্রশ্ন থাকলে আমাদেরকে মেসেজ করতে পারেন</p>

                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "100%" }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="standard-password-input"
                      label="Name"
                      type="text"
                      autoComplete="current-password"
                      variant="filled"
                    />
                    <TextField
                      id="standard-password-input"
                      label="Email"
                      type="email"
                      autoComplete="current-password"
                      variant="filled"
                    />
                    <TextField
                      id="standard-password-input"
                      label="Phone"
                      type="text"
                      autoComplete="current-password"
                      variant="filled"
                    />

                    <TextField
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows={5}
                      variant="filled"
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      className="my-3"
                      color="success"
                    >
                      Submit
                    </Button>
                  </div>
                  
                </Box>
                
              </div>
              </Slide>
            </Col>
            <Col lg={5}>
            <Slide right>
              <div className={classes.contactInfo}>
                <h4>Contact Info</h4>

                <ul className={classes.contactInfoList}>
                  <Divider light />
                  <li>
                    <span>
                      <i className="fas fa-map-marker-alt" />
                    </span>
                    <p>Muslim Market (3rd Floor), Shahid Bulbul Sarak, Sherpur - 2100</p>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-mobile-alt" />
                    </span>
                    <p>+(880) 1718067882</p>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-envelope-open-text" />
                    </span>
                    <p>ait.sherpur@gmail.com</p>
                  </li>
                  <Divider light />
                  <h5>Follow Us</h5>
                  <ul className={classes.social}>
                    <li>
                      <a href="https://www.facebook.com/ait.sherpur"  target="_blank">
                        <span>
                          <i className="fab fa-facebook-f" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              </Slide>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Contact;

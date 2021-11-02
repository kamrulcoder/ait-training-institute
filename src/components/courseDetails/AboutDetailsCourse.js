
import {Box, Divider, List, ListItem, ListItemButton, ListItemText,ListItemIcon  } from "@mui/material";
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import classes from "./CourseDetails.module.css"

import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';



const AboutDetailsCourse = () => {
  return (
    <div className={classes.aboutCourseDetails}>
      <Container>
        <Row>
          <Col lg={6}>
            <div className={classes.courseDetailsImg}>
              <Image src="https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png"
                alt="Image not found " />
            </div>
          </Col>
          <Col lg={6}>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <nav aria-label="main mailbox folders">
                <List       sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 200,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText primary="Inbox" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText primary="Drafts" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </List>
              </nav>
             
             
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutDetailsCourse;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Row, Col, Container, Image } from 'react-bootstrap';
import thinker from "../../img/thinker.jpg"
import classes from "./Faq.module.css"
import Divider from '../extraComponents/Divider';

import Slide from 'react-reveal/Slide';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: "1px  solid #ddd",
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: "yellow" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255)'
      : '#2a2a2a',

  flexDirection: 'row-reverse',
  color: "#fff",
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.faqArea}>
      <Container>
      <Slide top>
        <div className={classes.faqHeader}>
          <h2>কোর্স সম্পর্কিত সাধারণ জিজ্ঞাসা</h2>
          <Divider />
        </div>
        </Slide>
        <Row className="align-items-center">
          <Col lg={6}>
            <Slide left>
              <div className="faqContent">
                <Accordion className={classes.faqItem}
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography>এই কোর্স কাদের জন্য?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      যারা ওয়েব ডেভেলপার হতে চায়। যারা একদম শূন্য থেকে শুরু করে শেষ পর্যন্ত ওয়েব ডেভেলপমেন্ট শিখে তারপর ওয়েব ডেভেলপার হিসেবে কোন সফটওয়্যার কোম্পানিতে চাকরি করতে চায়, তাদের জন্য। যারা প্রোগ্রামিং বা ওয়েব ডেভেলপমেন্ট সম্পর্কে তেমন কিছুই জানে না, তাদের জন্য। এমনকি যারা চার বছর CSE পড়েও কিভাবে কি করবে দিশা করতে পারতেছে না, গুছিয়ে তেমন কিছু শিখেনি, তারাও এই কোর্স থেকে কমপ্লিট ওয়েব ডেভেলপমেন্ট শিখে চাকরিতে এপ্লাই করতে পারবে। 😀
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={classes.faqItem}
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <Typography>এই কোর্স শুরু করার আগে আমার কী কী পূর্ব অভিজ্ঞতা থাকা দরকার?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      আমরা যেহেতু একদম শূন্য থেকে শেখাচ্ছি। তাই তোমাকে আগে থেকে তেমন কিছু জানা লাগবে না। তবে তোমার হাতে যদি সময় থাকে তাহলে এই তিনটা কাজ করে ফেলতে পারো।
                      ১.  ভিডিও দেখে দেখে জিনিসগুলো মাথায় ঢুকানোর জন্য একটুখানি ব্রেনের খালি জায়গা রাখতে হবে।
                      ২. কোর্স এ জয়েন করলেই অটো ওয়েব ডেভেলপার হয়ে যাবে না। হার্ডওয়ার্ক করার, লেগে থাকার মেন্টালিটি থাকতে হবে।
                      ৩. কোথাও আটকে গেলে হেল্প চাওয়ার মেন্টালিটি এবং লেগে থাকার ইচ্ছা রাখতে হবে।
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={classes.faqItem}
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography>কোর্সের মধ্যে কী কী আছে ?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      সেটা কোর্স কারিকুলাম দেখলেই বুঝতে পারবে। তবে ছোট করে বললে, বলা যায়: বর্তমান সময়ে একজন সিরিয়াস ওয়েব ডেভেলপার হওয়ার জন্য যা যা লাগে, তার সবই আছে এই কোর্সে। যেমন ধরো HTML, CSS থেকে শুরু করে bootstrap, JavaScript, Git, ES6, REST API, server, JSON তো আছেই। তার সাথে সাথে আছে বর্তমান সময়ে সবচেয়ে বেশি চাকরি যে ফ্রেমওয়ার্ক সেই React, advanced React দিয়ে কমপ্লিট ওয়েবসাইট বানানোর সিস্টেম আছে। বাড়তি হিসেবে আছে node, database (mongodb), debug, problem solving, interview questions সহ আরো অনেক জিনিস আছে। আর পুরা কোর্সে তোমাকে ১১টা ওয়েবসাইট করে দেখানো হবে। আরো ১১টা ওয়েবসাইট থাকবে তোমার হোমওয়ার্ক হিসেবে। এই পুরা জিনিস কোন রকমে শেষ করতে পারলে, একজন উন্নতমানের জুনিয়র ওয়েব ডেভেলপার না হয়ে উপায় থাকবে না। 😀
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={classes.faqItem}
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography>এই কোর্স কমপ্লিট করতে কতদিন সময় লাগবে?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      তুমি যদি প্রতিদিন ১ থেকে দেড় ঘন্টা ধরে ভিডিও দেখো, তার সাথে সাথে এক্সট্রা ৪ থেকে ৬ ঘন্টা প্রাকটিস করো, তাহলে তোমার তিন মাসের মতো সময় লাগবে। তবে মাঝে মধ্যে হোমওয়ার্ক আর টেক এওয়ে প্রজেক্ট এর জন্য বাড়তি সময় বরাদ্ধ রাখতে হবে। হার্ডওয়ার্ক করার মেন্টালিটি নিয়ে আসতে হবে। ফাঁকিবাজি বা শর্টকাট করার কোন উপায় নাই।
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion className={classes.faqItem}
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography>এই কোর্স কমপ্লিট করতে কতদিন সময় লাগবে?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      আমরা কোর্সটি এমনভাবে সাজিয়েছি যেখানে একাডেমিক ব্যাকগ্রাউন্ড ম্যাটার করে না। তুমি যেকোনো একাডেমিক ব্যাকগ্রাউন্ড থেকে এই কোর্সটি করতে পারবে। চাইলে ভার্সিটির স্টুডেন্ট, কলেজের স্টুডেন্ট, চাকরিজীবি, বেকার, প্রেমিক, পলাতক প্রেমিক, এমনকি ফোন ধরে না এমন প্রেমিকা সবাই যাতে শিখতে পারে সেজন্য একদম শূন্য থেকে শুরু করা হয়েছে।
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion className={classes.faqItem}
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography>আমার কি কি জিনিস লাগবে?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      প্রথমত লাগবে ডেডিকেটেড সময়। প্রতিদিন মাস্ট ৬-৮ ঘন্টা। সম্ভব হলে ৮-১০ঘন্টা( সময় না দিতে পারলে। হার্ডওয়ার্ক করার ইচ্ছা না থাকলে কোর্সে এনরোল করে কোন লাভ হবে না) দ্বিতীয়ত লাগবে একটা ল্যাপটপ বা একটা কম্পিউটার (যেখানে node, Visual Studio Code টাইপের সফটওয়্যার ইনস্টল করা যায়) আর তৃতীয়ত লাগবে মিনিমাম ২-১০ এমবিপিএস এর ইন্টারনেট। ব্রডব্যান্ড হলেই ভালো যাতে কোর্সের ভিডিও ভালোভাবে দেখা যায়। প্রফেশনাল ওয়েব ডেভেলপার হতে হলে মিনিমাম ৩ মাস সিরিয়াস হার্ডওয়ার্ক এর কথা মাথায় রেখে নামতে হবে।
                    </Typography>
                  </AccordionDetails>
                </Accordion>


                <Accordion className={classes.faqItem}
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography>কোর্সের কনটেন্ট কি ফাইনাল? </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      স্টুডেন্টদের ফিডব্যাক এবং যারা চাকরি পাচ্ছে তাদের ফিডব্যাক অনুসারে আমরা নিত্য নতুন মডিউল যোগ করি।
                    </Typography>
                  </AccordionDetails>
                </Accordion>

              </div>
            </Slide>
          </Col>
          <Col lg={6}>
            <Slide right>
              <div className={classes.faqImg}>
                <Image src={thinker} alt="Image  Not Found "></Image>
              </div>
            </Slide>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;

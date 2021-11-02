import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Faq from "./components/Faq/Faq";
import Courses from "./components/Courses/Courses";
import CourseDetails from "./components/courseDetails/CourseDetails";




function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/faq">
          <Faq />
        </Route>
        <Route exact path="/courses">
          <Courses/>
        </Route>
        
        <Route exact path="/details">
          <CourseDetails/>
        </Route>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

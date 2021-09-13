import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import OnTheBlock from "./components/pages/OnTheBlock";
import Coding from "./components/pages/Coding";
import UIUX from "./components/pages/UIUX";
import Art from "./components/pages/Art";

import Photo from "./components/pages/Photo";

import ProjectOne from "./components/pages/uProjectOne";

import ProjectTwo from "./components/pages/uProjectTwo";
// import ProjectThree from "./components/pages/uProjectThree";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/onthebloc" exact component={OnTheBlock} />
          <Route path="/coding" exact component={Coding} />
          <Route path="/uiux" exact component={UIUX} />
          <Route path="/art" exact component={Art} />
          <Route path="/photo" exact component={Photo} />

          <Route path="/uProjectOne" exact component={ProjectOne} />

          <Route path="/uProjectTwo" exact component={ProjectTwo} />
          {/* <Route path="/uProjectThree" exact component={ProjectThree} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;

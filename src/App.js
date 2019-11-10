import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from "./pages/Aboutus";
import Smallfeatures from "./Smallfeatures";
import Ourservice from "./Ourservice";
import Menu from "./Menu.js";
import CompanyLogo from "./CompanyLogo"
import HomeSlider from "./HomeSlider";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path="/about">
            <About/>
            <Smallfeatures/> 
            <Ourservice/>
          </Route>
          <Route path="/contact">
            <h1>Contact Us</h1>
          </Route>
          <Route path="/">
            <HomeSlider/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

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
import Banner from "./innerBanner/Banner";
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path="/about">
           <Banner/>
            <About/>
            <Smallfeatures/> 
            <Ourservice/>
          </Route>
          <Route path="/contact">
            <Banner/>
            <Contact/>
          </Route>
          <Route path="/">
            <HomeSlider/>
            <About/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

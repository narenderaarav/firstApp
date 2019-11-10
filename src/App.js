import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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

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
import Contact from "./pages/Contact";
import Practice from "./Practice";
import Registration from "./pages/Registration";
import Welcome from "./pages/Welcome"
import { UserForm } from './Formcomponent/UserForm';
import ItemRender from './ItemLsit'
import ItemShow from './NewItemList'
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
            <ItemRender/>
          </Route>
          <Route path="/contact">
            <Banner/>
            <Contact/>
            <ItemShow/>
          </Route>
          <Route path="/registration">
            <Banner/>
            <UserForm/>
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

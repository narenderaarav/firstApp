import React, {Component} from "react";
import CompanyLogo from "./CompanyLogo";
import { NavLink } from "react-router-dom";
 
  
class Menu extends Component{
    render(){
        return <header className="header">
            <div className="container">
               <div className="row">
               <CompanyLogo/>
                    <div className="col-md-10 col-sm-10">
                        <nav className="navigation">
                            <ul>
                                 <li><NavLink exact to="/" className="main-nav" activeClassName="main-nav-active">Home</NavLink></li>
                                 <li><NavLink exact to="/about" className="main-nav" activeClassName="main-nav-active">About Us</NavLink></li>
                                 <li><NavLink exact to="/contact" className="main-nav" activeClassName="main-nav-active">Contact us</NavLink></li>
                                 <li><NavLink exact to="/registration" className="main-nav" activeClassName="main-nav-active">Registration</NavLink></li>
                            </ul>
                        </nav>
                    </div>
               </div>
            </div>
        </header>
    }
}

export default Menu;
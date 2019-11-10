import React, {Component} from "react";
import CompanyLogo from "./CompanyLogo";
import {
    Link
  } from "react-router-dom";
  
  
class Menu extends Component{
    render(){
        return <header className="header">
            <div className="container">
               <div className="row">
               <CompanyLogo/>
                    <div className="col-md-10 col-sm-10">
                        <nav className="navigation">
                            <ul>
                                 <li><Link to="/">Home</Link></li>
                                 <li><Link to="/about">About Us</Link></li>
                                 <li><Link to="/contact">Contact us</Link></li>
                            </ul>
                        </nav>
                    </div>
               </div>
            </div>
        </header>
    }
}

export default Menu;
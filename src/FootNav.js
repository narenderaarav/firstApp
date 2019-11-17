import React, {Component} from "react";
import { NavLink } from "react-router-dom";
export default class FootNav extends Component{
    render(){
        return <div className="links">
        <h3>Links</h3>
        <ul>
                <li><NavLink exact to="/" className="mainFoot" activeClassName="mainFoot-nav-active">Home</NavLink></li>
                <li><NavLink exact to="/about" className="mainFoot" activeClassName="mainFoot-nav-active">About Us</NavLink></li>
                <li><NavLink exact to="/contact" className="mainFoot" activeClassName="mainFoot-nav-active">Contact us</NavLink></li>
        </ul>
        
    </div>
    }
         
    
}
import React, {Component} from "react";
import RegsitrationForm from "./RegistrationForm"
export default class Registration extends Component{
    render(){
        return <div className="container">
        <div className="contact">
            <div className="contactHeading">
                <h2>Registration Form</h2>
            </div>
        </div>
    <RegsitrationForm/>
    </div>
    }
}

 
import React, {Component} from "react";
import Form from "./Form"
export default class Contact extends Component{
    render(){
        return <div className="container">
            <div className="contact">
                <div className="contactHeading">
                    <h2>Connecting With Us</h2>
                </div>
            </div>
        <Form/>
        </div>
    }
}
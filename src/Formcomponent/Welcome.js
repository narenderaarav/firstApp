import React, { Component } from "react";
export default class Welcome extends Component {
    render() {
        return <div className="container">
            <div className="contactForm">
                <div className="row">
                    <div className="offset-md-2 col-md-8 ">
                       
                            <div className="welcome">
                                <h4>Welcome </h4>
                                <h5>Narender Kumar</h5>
                                <input type="submit" value="Next" className="btn btn-success" />
                            </div>
                       
                    </div>
                </div>
            </div>

        </div>
    }
}
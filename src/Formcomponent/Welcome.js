import React, { Component } from "react";
export default class Welcome extends Component {
        continue = e => {
        e.preventDefault();
        this.props.nextStep();
   
    };
    render() {
        const {values, handleChange} = this.props;
        return <div className="container">
            <div className="contactForm">
                <div className="row">
                    <div className="offset-md-2 col-md-8 ">
                       
                            <div className="welcome">
                                <h4>Welcome </h4>
                                <h5>Narender Kumar</h5>
                                <input type="submit" value="Next"  onClick={this.continue} className="btn btn-success" />
                            </div>
                       
                    </div>
                </div>
            </div>

        </div>
    }
}
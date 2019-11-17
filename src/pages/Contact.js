import React, {Component} from "react";

export default class Contact extends Component{
    render(){
        return <div className="container">
            <div className="contact">
                <div className="contactHeading">
                    <h2>Connecting With Us</h2>
                </div>
            </div>
            <div className="contactForm">
                <div className="row">
                    <div className="offset-md-2 col-md-8 ">
                       <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div class="form-group">
                                <input className="form-control" placeholder="Name"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                            <div class="form-group">
                                <input className="form-control" placeholder="Email"/>
                                </div>
                            </div>
                       </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div class="form-group">
                                <input className="form-control" placeholder="Subject"/>
                                </div>
                            </div>
                           
                       </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div class="form-group">
                                <textarea className="form-control" rows="4" placeholder="Subject"/>
                                </div>
                            </div>
                       </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div class="form-group">
                                <button type="button" class="btn btn-success">Send Message</button>
                                </div>
                            </div>
                       </div>

                    </div>
                </div>
            </div>
        </div>
    }
}
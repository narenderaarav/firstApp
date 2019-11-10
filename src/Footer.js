import React, {Component} from "react";
function Footer (){
    return <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="links">
                            <h3>Links</h3>
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Our Shop</li>
                            </ul>
                        </div>
                    </div>

                     <div className="col-md-4">
                        <div className="links">
                            <h3>Location</h3>
                            <p>Excepteur sint occaecat cupidat non proident sunt.</p>
                            <ul>
                                <li>1201 Park Street, Fifth Avenue,</li>
                                <li>[88] 657 524 332</li>
                                <li>[837] 6340 23092 23</li>
                                <li>info@example.com</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="sidebar">
                            <h3>Popular Post</h3>
                            
                            <ul>
                                <li>
                                    <div className="img-holder">
                                    <img src={"about.jpg"} />
                                    </div>
                                    <div className="title-holder">
                                    <p>11 Things You Need to Know About Bitcoin – Bare 
                                       Facts </p>
                                       <p> December 14, 2017</p>

                                    </div>

                                </li>

                                <li>
                                    <div className="img-holder">
                                    <img src={"about.jpg"} />
                                    </div>
                                    <div className="title-holder">
                                    <p>11 Things You Need to Know About Bitcoin – Bare 
                                       Facts </p>
                                       <p> December 14, 2017</p>

                                    </div>

                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
}

export default Footer;
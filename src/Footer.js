import React, {Component} from "react";
import PopularPost from "./PopularPost";
import FootNav from "./FootNav"
function Footer (){
    return <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <FootNav/>
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
                        <PopularPost/>
                    </div>
                </div>
            </div>
    </footer>
}

export default Footer;
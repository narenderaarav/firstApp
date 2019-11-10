import React, {Component} from "react";
class Ourservice extends Component{
    render(){
        return <div className="container">
            <div className="serviceTxt">
                <h1> Our Services</h1>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde omnis iste natus error sit.</p>
            </div>
            <div className="serviceBox">
                <div className="row">
                    <div className="col-md-4">
                        <div className="ourService">
                            <h2>Business Services Consulting</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem dolorem dicta libero veritatis reiciendis  magni.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="ourService">
                            <h2>Energy Environment Consulting</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem dolorem dicta libero veritatis reiciendis  magni.</p>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="ourService">
                            <h2>Consumer Products Consulting</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem dolorem dicta libero veritatis reiciendis  magni.</p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    }
}
export default Ourservice;
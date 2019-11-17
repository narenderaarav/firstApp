import React, { Component } from "react";
import OurserviceBox from "./components/OurservicesBox";
import SeriveConfig from "./configration/service-config"
class Ourservice extends Component {
    render() {
        return <div className="container">
            <div className="serviceTxt">
                <h1> Our Services</h1>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde omnis iste natus error sit.</p>
            </div>
            <div className="serviceBox">
                <div className="row">
                    {
                        SeriveConfig.map(data => {
                            return (
                                <div className="col-md-4" key={data.id}>
                                    <OurserviceBox heading={data.heading} para={data.para} />
                                </div>
                            )
                        })
                    } 
                 </div>
            </div>
        </div>
    }
}
export default Ourservice;
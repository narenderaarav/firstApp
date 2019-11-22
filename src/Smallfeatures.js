import React, { Component } from "react";
import BlueBox from "./components/BlueBox";
import FeatureConfig from "./configration/FeatureConfig"
class Smallfeatures extends Component {
    render() {
        return <div className="container">
            <div className="features">
                <div className="row">
                {
                     FeatureConfig.map(data => {
                    return(
                        <div className="col-md-4" key={data.id}>
                        <BlueBox heading={data.heading} />
                    </div>
                    )    
                 })
                }
                    
                </div>
            </div>
        </div>
    }

}

export default Smallfeatures;
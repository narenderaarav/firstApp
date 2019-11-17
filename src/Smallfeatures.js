import React, { Component } from "react";
import BlueBox from "./components/BlueBox";
class Smallfeatures extends Component {
    render() {
        return <div className="container">
            <div className="features">
                <div className="row">
                    <div className="col-md-4">
                        <BlueBox heading="Business with Thought Leadership" />
                    </div>
                    <div className="col-md-4">
                        <BlueBox heading="Global consumer insights for business" />
                    </div>
                    <div className="col-md-4">
                        <BlueBox heading="Segment of focused investors" />
                    </div>
                </div>
            </div>
        </div>
    }

}

export default Smallfeatures;
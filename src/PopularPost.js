import React, { Component } from "react";
import PopularPostBox from "./components/PopularPostBox";
import PopularPostConfig from "./configration/PopularPostConfig"
class PopularPost extends Component {
    render() {
        return <div className="sidebar">
            <h3>Popular Post</h3>
            <ul>
                    {
                       PopularPostConfig.map(data => {
                        return (
                        <li>
                            <PopularPostBox popularImage={data.figImg} paragraph={data.para}  date={data.paraData}/>
                         </li>
                            )
                         })
                    }
            </ul>
        </div>
    }
}

export default PopularPost;


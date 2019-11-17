import React, { Component } from "react";
class PopularPost extends Component {
    render() {
        return <div className="sidebar">
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
    }
}

export default PopularPost;
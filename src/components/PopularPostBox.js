import React, {Component} from "react";
import classes from "./PopularPost.module.css";

export default (props) => {
    return ( <div><div className={classes.Img}>
                 <span>{props.popularImage}</span>
            </div>
            <div className={classes.Title}>
                <p>{props.paragraph}</p>
                <p>{props.date}</p>
            </div>
    </div>

)
}
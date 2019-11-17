import React, {Component} from "react";
import classes from "./OurservicesBox.module.css";

export default  (props) => {
    return (<div className={classes.OurService}>
        <h2>{props.heading}</h2>
        <p>{props.para}</p>
    </div>)
}
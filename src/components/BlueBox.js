import React, { Component } from "react";
import classes from "./BlueBox.module.css";
export default  (props) => {
    return (<div className={classes.Box}>
        <h1>{props.heading}</h1>
    </div>
    )
}
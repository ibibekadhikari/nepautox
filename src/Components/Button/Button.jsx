import React from 'react'
import add from "./icons/add.png";
import locate from "./icons/locate.png";
import edit from "./icons/edit.png";
import run from "./icons/run.png";
import "./Button.css";

const Button = (props) => { 
    let imageValue = props.imgName === "add" ? add : props.imgName === "locate" ? locate : props.imgName === "edit" ? edit : run;
  return (
    <div>
        <button className="btn" onClick={props.onClick}> <img className="btn_img" src={imageValue} height="18px" draggable="false"/>{props.buttonName}</button>
    </div>
  )
}

export default Button
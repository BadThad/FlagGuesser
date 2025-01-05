import React, { useEffect, useState } from "react";
import "./Popup.css";
import LoginSignup from "./loginsignup";

function Popup(props)  {
    return (props.trigger) ? (
    <div className="popup">
    <div className="popup-inner">
    <LoginSignup/>
    <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
    {props.Children}
    </div>
    </div>
    ) : "";
}
export default Popup
import React, { useRef, useEffect, useState } from "react";
import Popup from "./Popup.jsx";
import "./header.css"
import LoginSignup from "./loginsignup.jsx";


function Header(){
    const [buttonPopup, setbuttonPopup] = useState(false);
    return ( 
        <>
        <navbar>
            <div className="game-title-container">
                <p className="game-title">Guess the Flag</p>
            </div>
            <div className="signin-btn-container">
                <button onClick={() => setbuttonPopup(true)} className="signin-btn">Sign In</button>
                <Popup trigger={buttonPopup} setTrigger={setbuttonPopup}>
                    <LoginSignup/>
                </Popup>
            </div>
        </navbar>
        </>
    )
}

export default Header;
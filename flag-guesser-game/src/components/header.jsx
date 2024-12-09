import React, { useRef, useEffect, useState } from "react";
import Popup from "./Popup.jsx";
import "./header.css"
import LoginSignup from "./loginsignup.jsx";


function Header(){
    const [buttonPopup, setbuttonPopup] = useState(false);
    return ( 
        <>
        <navbar>
        <div>
            <p>Header</p>
        </div>
        <div>
        <button onClick={() => setbuttonPopup(true)} className="signin">signin</button>
        <Popup trigger={buttonPopup} setTrigger={setbuttonPopup}>
          <LoginSignup/>
        </Popup>
        </div>
        </navbar>
        </>
    )
}

export default Header;
import "./loginsignup.css"
import password_icone from "../assets/lock-icon.png";
import email_icone from "../assets/mail-icon.png";
import user_icone from "../assets/person-icon.png";

const LoginSignup = () => {
    const [action,setAction] = useState("Sign up");

    return(
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                    <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="imput">
                    <img src={user_icone} alt=""/>
                    <input type="text" placeholder="username"/>
                </div>}
                <div className="imput">
                    <img src={email_icone} alt=""/>
                    <input type="email" placeholder="email"/>
                </div>
                <div className="imput">
                    <img src={password_icone} alt=""/>
                    <input type="password" placeholder="password"/>
                </div>
            </div>
            {action==="Sign up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here</span></div>}
            <div className="submit.container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={() =>{setAction("Sign up")}}>Sign Up</div>
            <div className={action==="Sign up"?"submit gray":"submit"}  onClick={() =>{setAction("Login")}}>Login</div>

            </div>
            
        </div>

    )
}

export default LoginSignup
import React, { useRef, useEffect, useState,} from "react";
import "./loginsignup.css"
import password_icone from "../assets/lock-icon.png";
import user_icone from "../assets/person-icon.png";


const LoginSignup = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [item, setItem] = useState([]);
    


    useEffect(() =>{
        localStorage.setItem('item', JSON.stringify(item));
    }, [item]);
  

    useEffect(() => {
        const savedItem = JSON.parse(localStorage.getItem('item'));
    if (item) {
        setItem(savedItem);
    }
    }, []);

    useEffect (() => {
        userRef.current.focus();
    }, [])

    useEffect (() => {
        setErrMsg('');
    }, [user, pwd])

    const handelSubmit = async (e) => {
        e.preventDefault();
        console.log(user,pwd);

        setItem(prevItems => [...prevItems, { user, pwd }]);
        
        setUser('');
        setPwd('');
        setSuccess(true);
    };

    return(
        <>
        {success ? (
            <section className="logged-in">
            <h1 className="logged-in-text">you are logged in</h1>
            <br/>
            <p>
                <a  className="homebtn" href="app.jsx">back to home</a>
            </p>
            </section>
        ) : (
        <section className="container">
            <p ref={errRef} className={errMsg ? "errmsg" :
                 "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1 className="header-1">sign in</h1> 
                <form className="header" onSubmit={handelSubmit}>
                    <label className="lableuser" htmlFor="username"><img  className="img" src={user_icone}/>Username</label>
                    <input className="inputs" type="text"
                     id="username"
                     ref={userRef}
                     autoComplete="off"
                     onChange={(e) => setUser(e.target.value)}
                     value={user}
                     required
                     />
                     <label className="lablePwd" htmlFor="password"><img  className="img" src={password_icone}/>Password</label>
                    <input className="inputs" type="password"
                     id="password"
                     onChange={(e) => setPwd(e.target.value)}
                     value={pwd}
                     required
                     />      
                     <button className="submit">sign in</button>             
                </form>
        </section>
        )}
        </>
    )
}

export default LoginSignup
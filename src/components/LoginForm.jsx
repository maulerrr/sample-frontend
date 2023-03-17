import React from 'react';
import classes from "./classes/components.module.css"
import handleLogin from "../handlers/HandleLogin";
import {useState} from "react";

function LoginForm(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function HandleLogin(e){
        e.preventDefault()
        handleLogin(email, password)
            .then((response)=>{
                console.log("Trying to log in..")
                if (response.code === 200) window.location.href = "/"
            })
            .catch((err)=>{
                console.log(err)
            })
        }

    return (
        <div className={classes.FormWrapper}>
            <form onSubmit={HandleLogin}>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email"
                       onChange={(e)=>{setEmail(e.target.value)}}/>

                <label htmlFor="password">Password: </label>
                <input type="password" name="password"
                       onChange={(e)=>{setPassword(e.target.value)}}/>

                <label> Don't have an account? <a href={"/signup"}>Sign Up</a>
                </label>

                <input type="submit" value="Login"/>
            </form>
        </div>
    );
}

export default LoginForm;
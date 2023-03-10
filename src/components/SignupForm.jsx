import React, {useState} from 'react';
import classes from "./classes/components.module.css"
import handleRegistration from "../handlers/HandleRegistration";

function SignupForm(...props) {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function HandleRegistration(e){
        e.preventDefault()
        handleRegistration(username, email, password).then(()=>{
            console.log("Trying to u sign up..")
        })
    }

    return (
        <div className={classes.FormWrapper}>
            <form onSubmit={HandleRegistration}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username"
                       onChange={(e)=>{setUsername(e.target.value)}}/>

                <label htmlFor="email">Email: </label>
                <input type="text" name="email"
                       onChange={(e)=>{setEmail(e.target.value)}}/>

                <label htmlFor="password">Password: </label>
                <input type="password" name="password"
                       onChange={(e)=>{setPassword(e.target.value)}}/>

                <label> Already have an account? <a href={"/login"}>Sign in</a>
                </label>

                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    );
}

export default SignupForm;
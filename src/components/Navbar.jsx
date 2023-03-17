import React from 'react';
import LogOut from "../handlers/HandleLogOut";
import classes from "./classes/components.module.css"

function Navbar(props) {

    function handleLogOut(e){
        e.preventDefault()
        LogOut().then(()=>{
            console.log("see ya")
        }).finally(()=>{
            window.location.href='/'
        })
    }

    return (
        <header>
            <nav className={classes.Navbar}>
                <p>
                    Sample
                </p>

                <a href="/">Home</a>

                <a href="/create">Create</a>

                <button onClick={handleLogOut}>
                    Log out
                </button>
            </nav>
        </header>
    );
}

export default Navbar;
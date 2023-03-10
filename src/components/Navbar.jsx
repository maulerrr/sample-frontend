import React from 'react';
import LogOut from "../handlers/implement/HandleLogOut";
import classes from "./classes/components.module.css"

function Navbar(props) {
    return (
        <header>
            <nav className={classes.Navbar}>
                <p>
                    Sample
                </p>

                <a href="/">Home</a>

                <a href="/personal">Personal</a>

                <button onClick={LogOut}>
                    Log out
                </button>
            </nav>
        </header>
    );
}

export default Navbar;
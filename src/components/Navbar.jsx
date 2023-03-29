import React, {useState} from 'react';
import LogOut from "../handlers/auth/HandleLogOut";
import classes from "./classes/components.module.css"
import {faRightFromBracket, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useCookies} from "react-cookie";

function Navbar(props) {
    const [clicked, setClicked] = useState(false)
    const [dropdown, setDropdown] = useState(<></>)
    const [cookies, setCookie, removeCookie] = useCookies()

    function showDropDown(e){
        if (clicked) setClicked(false)
        else setClicked(true)

        if (username) {
            if (clicked) {
                setDropdown(
                    <button className={classes.LogOutButton} onClick={handleLogOut}>
                        Log out
                        &nbsp;
                        <FontAwesomeIcon icon={faRightFromBracket}/>
                    </button>
                )
            } else setDropdown(<></>)
        }

        else window.location.href = "/login"

    }

    function handleLogOut(e){
        setClicked(false)
        e.preventDefault()
        LogOut().then(()=>{
            removeCookie("token")
            console.log("see ya")
        }).finally(()=>{
            window.location.href='/'
        })
    }

    const username = JSON.parse(localStorage.getItem("user"))?.username

    return (
        <header>
            <nav className={classes.Navbar}>
                <p>
                    Sample
                </p>

                <a href="/">Home</a>

                <a href="/create">Create</a>

                <div onClick={showDropDown}>
                    <p className={classes.NavDropdown} >
                        <FontAwesomeIcon icon={faUser}/>
                        &nbsp;
                        {
                            username ? username : <a href={"/login"}>Login</a>
                        }
                    </p>
                    {dropdown}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
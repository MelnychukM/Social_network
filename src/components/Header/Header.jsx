import React from "react";
import c from "./Header.module.css"
import Logotype from "../Profile/Logo/logotype.png";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={c.header}>
            <div className={c.profileHeader}>
                <div className={c.logotype}>
                    <img src={Logotype} alt=""/>
                </div>
                <div className={c.titleLogotype}>
                    Messenger Network
                </div>
                <div className={c.loginBlock}>
                        {props.isAuth
                            ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                            : <NavLink to={'/login'} >Login</NavLink>
                        }
                </div>
            </div>

        </header>
    );
}

export default Header;
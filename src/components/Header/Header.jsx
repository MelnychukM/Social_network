import React from "react";
import c from "./Header.module.css"

import Logotype from "../Profile/Logo/logotype.png";

const Header = () => {
    return (
        <header className={c.header}>
            <div className={c.profileHeader}>
                <div className={c.logotype}>
                    <img src={Logotype} alt=""/>
                </div>
                <div className={c.titleLogotype}>
                    Messenger Network
                </div>
            </div>
        </header>
    );
}

export default Header;
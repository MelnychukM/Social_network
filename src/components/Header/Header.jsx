import React from "react";
import c from "./Header.module.css"

const Header = () => {
    return (
        <header className={c.header}>
            <img src="https://s0.rbk.ru/v6_top_pics/resized/1440xH/media/img/4/73/755857544706734.jpg"
                 alt="тут картинка"/>
        </header>
    );
}

export default Header;
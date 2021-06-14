import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Valera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Denis</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Nikita</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Misha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Nazar</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Sveta</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your Mararader</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )

}

export default Dialogs;
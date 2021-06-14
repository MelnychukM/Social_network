import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    const path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name="Valera" id="1"/>
                <Dialog name="Denis" id="2"/>
                <Dialog name="Andrey" id="3"/>
                <Dialog name="Nikita" id="4"/>
                <Dialog name="Sasha" id="5"/>
                <Dialog name="Valentin" id="6"/>
                <Dialog name="Misha" id="7"/>


            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is your Marader"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
            </div>
        </div>
    )

}

export default Dialogs;
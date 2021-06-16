import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogsItem/DialogItem";

const Dialogs = (props) => {


    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messagesData.map(m => <Message message={m.name}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;
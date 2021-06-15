import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogsItem/DialogItem";

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: "Valera"},
        {id: 2, name: "Denis"},
        {id: 3, name: "Nikita"},
        {id: 4, name: "Nazar"},
        {id: 5, name: "Misha"},
        {id: 6, name: "Andrey"}
    ]
    let messagesData = [
        {id: 1, name: "Hi"},
        {id: 2, name: "How is your Marader"},
        {id: 3, name: "Yo"},
        {id: 4, name: "Yo"},
        {id: 5, name: "Yo"},
        {id: 6, name: "Yo"}
    ]

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messagesData.map(m => <Message message={m.name}/>)

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
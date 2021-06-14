import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>



            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].name}/>
                <Message message={messagesData[1].name}/>
                <Message message={messagesData[2].name}/>
                <Message message={messagesData[3].name}/>
                <Message message={messagesData[4].name}/>
            </div>
        </div>
    )

}

export default Dialogs;
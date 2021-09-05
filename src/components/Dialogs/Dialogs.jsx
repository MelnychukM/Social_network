import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogsItem/DialogItem";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm";



const Dialogs = (props) => {


    let dialogsElements = props.MessagesPage.dialogsData.map(d => <DialogItem name={d.name}
                                                                 key={d.id} id={d.id}/>);
    let messagesElements = props.MessagesPage.messagesData.map(m => <Message message={m.message}
                                                                key={m.id}/>);


    let addNewMessageChange = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) {
        return <Redirect to={"/login"}/>;
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageForm onSubmit={addNewMessageChange}/>
                </div>

            </div>
        </div>
    );
};


export default Dialogs;
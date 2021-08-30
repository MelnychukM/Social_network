import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogsItem/DialogItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {

    let state = props.MessagesPage;


    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name}
                                                                 key={d.id} id={d.id}/>);
    let messagesElements = state.messagesData.map(m => <Message message={m.message}
                                                                key={m.id}/>);
    let newMessageBody = state.newMessageBody;

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
                    <AddMessageFormRedux onSubmit={addNewMessageChange}/>
                </div>

            </div>
        </div>
    );
};

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="Enter your message" name="newMessageBody" component="textarea"/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;
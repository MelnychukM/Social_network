import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)

let AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="Enter your message" name="newMessageBody" component={Textarea}
            validate={[required, maxLength50]} />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

AddMessageForm = reduxForm({form:'dialogs-add-message-form'})(AddMessageForm);

export default AddMessageForm;

import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

let maxLength20 = maxLengthCreator(20)

let LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Login"} name={"login"} component={Input}
                   validate={[required, maxLength20]}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} component={Input}
                   validate={[required, maxLength20]}/>
        </div>
        <div>
            <Field component={Input} name={"rememberMe"} type={"checkbox"}/>Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

LoginForm = reduxForm({form: 'login'})(LoginForm);

export default LoginForm;

import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import s from "./../common/FormsControls/FormsControls.module.css";


let LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"} name={"email"} component={Input}
                   validate={[required]}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} type={'password'} component={Input}
                   validate={[required]}/>
        </div>
        <div>
            <Field component={Input} name={"rememberMe"} type={"checkbox"}/>Remember me
        </div>
        {props.error && <div className={s.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

LoginForm = reduxForm({form: 'login'})(LoginForm);

export default LoginForm;

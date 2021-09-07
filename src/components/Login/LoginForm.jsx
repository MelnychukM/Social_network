import React from "react";
import {reduxForm} from "redux-form";
import {CreateField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import s from "./../common/FormsControls/FormsControls.module.css";


let LoginForm = ({handleSubmit,error}) => {
    return <form onSubmit={handleSubmit}>
            {CreateField("Email","email",Input,[required])}
            {CreateField("Password","password",Input,[required], {type: "password"})}
            {CreateField(null,"rememberMe",Input,null, {type: "checkbox"}, "remember me")}

        {error && <div className={s.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

LoginForm = reduxForm({form: 'login'})(LoginForm);

export default LoginForm;

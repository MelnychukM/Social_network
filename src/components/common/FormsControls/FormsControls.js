import React from "react";
import s from "./FormsControls.module.css"
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";


const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {meta, input, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
}

export const Input = (props) => {
    const {meta, input, child, ...restProps} = props
    return <FormControl {...props}><input {...input}{...restProps}/></FormControl>

}

export const CreateField = (placeholder, name, component, validate, props = {}, text= "") => (
    <Field placeholder={placeholder}
           name={name}
           component={component}
           validate={validate}
           {...props}/>
)



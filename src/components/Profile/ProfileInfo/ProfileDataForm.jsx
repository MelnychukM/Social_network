import s from "../Profile.module.css";
import style from "../../common/FormsControls/FormsControls.module.css";
import React from "react";
import {CreateField, Input, Textarea} from "../../common/FormsControls/FormsControls"
import {reduxForm} from "redux-form";

const ProfileDataForm = ({isOwner,goToEditMode,handleSubmit,profile,error}) => {

    return <form onSubmit={handleSubmit}>

        <div>
            <button>save</button>
        </div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}

        <div><b>FullName : </b><span>{CreateField("Full name", "fullName", Input,[] )}</span></div>


        <div><b>AboutMe :</b><span>{CreateField("AboutME", "aboutMe", Textarea,[] )}</span></div>
        <div><b>Looking for a job :</b> <span>{CreateField("", "lookingForJobs", Input,[], {type:"checkbox"} )}</span></div>
        <div><b>My professional skills :</b> <span>{CreateField("My professional skills", "lookingForAJobDescription", Textarea,[] )}</span></div>

        <div>
            <b className={s.fontSize}>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div className={s.contact}>
                <b>{key} :</b>  {CreateField(key, "contacts."+key, Input,[] )}
            </div>
        })}
        </div>

    </form>

}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;
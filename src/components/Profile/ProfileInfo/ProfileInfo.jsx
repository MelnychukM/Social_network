import React , {useState} from "react";
import "../Profile.module.css";
import s from "../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/users.png"
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, updateStatus, status, isOwner, savePhoto,saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit =(formData) => {

        saveProfile(formData).then(()=>{
            setEditMode(false);
        })



    }

    return (
        <div>
            <div className={s.profileHeader}>
                <div className={s.ava}>
                    <img src={profile.photos.small || userPhoto} className={s.smallPhoto} alt="small-photo"/>
                </div>
                <div className={s.titleLogotype}>
                    <div>{profile.fullName}</div>
                </div>
            </div>
            <div className={s.gridProfile}>
                <div className={s.ava}>
                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt="large-photo"/>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                </div>
                <div className={s.gridProfileInfo}>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                    {editMode
                        ?  <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>
                        : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} />}
                </div>
            </div>
        </div>
    );
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contacts}><b>{contactTitle}</b>: {contactValue}</div>
}

const ProfileData = ({profile,isOwner,goToEditMode}) => {
    return <div className={s.gridProfileInfo}>

        <div>
            {isOwner && <button onClick={goToEditMode}>edit</button>}
        </div>

        <div><b>FullName : </b><span>{profile.fullName}</span></div>

        {
            profile.aboutMe ?
                <div><b>{profile.aboutMe ? "AboutMe : " : ""}</b>
                    <span>{"AboutMe" ? profile.aboutMe : ""}</span></div>
                : ""
        }

        <div><b>Looking for a job :</b> <span>{profile.lookingForJob ? "Yes" : "no"}</span></div>

        <div><b>My professional skills :</b> <span>{profile.lookingForAJobDescription}</span></div>

        <div>
            <b className={s.fontSize}>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>

    </div>


}



export default ProfileInfo;
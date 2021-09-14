import React from "react";
import "../Profile.module.css";
import s from "../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/users.png"

const ProfileInfo = ({profile, updateStatus,status,isOwner,savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
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
                    <div className={s.fullName}>
                        <div>FullName</div>
                        <div>{profile.fullName}</div>
                    </div>
                    <div className={s.aboutMe}>
                        <div>About me:</div>
                        <div>{profile.aboutMe}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProfileInfo;
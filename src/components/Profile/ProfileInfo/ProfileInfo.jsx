import React from "react";
import "../Profile.module.css";
import s from "../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import Logotype from "../Logo/logotype.png"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>

            <div className={s.titleLogotype}>
                <img src={Logotype} alt=""/>
            </div>
            <div className={s.gridProfile}>
                <div className={s.ava}>
                    <img src={props.profile.photos.large} alt=""/>
                </div>
                <div className={s.gridProfileInfo}>
                    <div className={s.fullName}>
                        <div>FullName </div>
                        <div>{props.profile.fullName}</div>
                    </div>
                    <div className={s.aboutMe}>
                        <div>About me:</div>
                        <div>{props.profile.aboutMe}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProfileInfo;
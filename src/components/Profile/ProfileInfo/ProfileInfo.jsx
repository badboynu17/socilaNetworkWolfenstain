import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Dialogs/common/Preloader";


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.ava}>
                <img
                    src='https://i.pinimg.com/736x/da/15/5b/da155b2989b58374c4e3930c957d9eee--wolfenstein-art-reference.jpg'/>
            </div>
            <img src='https://cdn.akamai.steamstatic.com/steam/apps/201810/capsule_616x353.jpg?t=1630605243'/>
            <div className={s.discriptionBlok }>
                <img src={props.profile.photos.large}/>

                Ava-discription

            </div>

        </div>
    )

}
export default ProfileInfo;
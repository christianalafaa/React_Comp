import React from 'react'
import MyPhoto from './Profile.jpg'

function ProfilePhoto() {
    return(
        <div>
            <br/>
            <img src={MyPhoto} alt='Boys in an elevator' width={320} height={320}/>
        </div>
    );
}

export default ProfilePhoto;
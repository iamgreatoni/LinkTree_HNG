import {useState}  from 'react'
import './ProfileImg.css'

import Img from "../../../assets/profile_img.png";
import CameraIcon from "../../../assets/camera.svg";
import ShareIcon from "../../../assets/share.svg";

function ProfileImg() {
  const [hover, setHover] = useState(false);

  return (
    <section className="profile">
    <div className="profile-pic">
      <div className="profile-pic-container">
        <div className="profile-bg"></div>
        <img src={Img} alt="profile-Pic" id="profile__img" />
        <img src={CameraIcon} alt="camera" className="profile-camera" />
      </div>
      <p id="twitter">IamGreat_Oni</p>
      <p id="slack">onijohnoluwaseun</p>
    </div>
    <div className="profile-share-container" onMouseOver={() => setHover(!hover)}>
      <img src={ShareIcon} alt="share profile" className="profile-share" />
    </div>
  </section>
  )
}

export default ProfileImg


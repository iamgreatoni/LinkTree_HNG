import './ProfileImg.css'

import Img from "../../../assets/profile_img.png";
import CameraIcon from "../../../assets/camera.svg";
import ShareIcon from "../../../assets/shareIcon.svg";

function ProfileImg() {

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__img">
          <img src={Img} className='profile__img' id="profile__img" alt="profile img" />
          <div className="overlay">
            <img src={CameraIcon} className="overlay__icon" alt="camera icon" />
          </div>
        </div>
        <h3 className="twitter" id="twitter">
          IamGreat_Oni
        </h3>
        <p className="slack" id="slack">
          onijohnoluwaseun
        </p>
      </div>
      <div className="share__icon" >
        <img src={ShareIcon} className="share__img" alt="share icon" />
      </div>
    </header>
  )
}

export default ProfileImg


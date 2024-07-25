import React, { useState } from "react";
import { ProfileHold } from "./Profile.styles";
import BG from "../../../assets/profile/editBG.png";
import Logo from "../../../assets/profile/editLOGO.png";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";
import { serverDomain } from "../../../Constant/serverDomain";

const Profile = ({ avatar, cover }) => {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState(BG);
  const [logoImage, setLogoImage] = useState(Logo);

  const editProfile = () => {
    navigate("/EditProfile");
  };

  const openCreateSession = () => {
    navigate("/createSession");
  };

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg")
    ) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file (jpg, jpeg, png)");
    }
  };

  return (
    <ProfileHold>
      <div
        className="bgImg"
        onClick={() => document.getElementById("bgInput").click()}
      >
        <img
          src={cover ? `${serverDomain}/${cover}` : backgroundImage}
          alt="background"
          style={{ objectFit: "cover" }}
        />
        <input
          type="file"
          id="bgInput"
          style={{ display: "none" }}
          accept="image/jpeg, image/png, image/jpg"
          onChange={(e) => handleImageChange(e, setBackgroundImage)}
        />
      </div>
      <div
        className="logo"
        onClick={() => document.getElementById("logoInput").click()}
      >
        <figure>
          <img src={avatar ? `${serverDomain}/${avatar}` : logoImage} alt="logo" />
          <input
            type="file"
            id="logoInput"
            style={{ display: "none" }}
            accept="image/jpeg, image/png, image/jpg"
            onChange={(e) => handleImageChange(e, setLogoImage)}
          />
        </figure>
      </div>
      <div className="textxWrap">
        <div className="text">
          <h2>Rahul Wagh</h2>
          <p>Talent Management Sessions</p>
          <strong>Human Rights | Women Empowerment</strong>
        </div>
      </div>
      <div className="btn">
        <Button width="208px" onClick={editProfile}>
          Edit Profile
        </Button>
        <Button width="208px" type="outline" onClick={openCreateSession}>
          Create Sessions
        </Button>
        <Button width="208px" type="outline">
          Manage Calendar
        </Button>
      </div>
    </ProfileHold>
  );
};

export default Profile;

import React from "react";
import { ProfileWrapper } from "./Profile.styles";
import RightSideBar from "../rightSideBar";
import Profile from "./Profile";
import Rating from "./Rating";
import About from "./About";
import Skills from "./Skills";
import Analysis from "./Analysis";
import Education from "./Education";
import { Educationdata, Experiencedata } from "../../Constant/Data";
import Certificate from "./Certificate";
const MyProfile = () => {
  return (
    <ProfileWrapper>
      <div className="proflewrap">
        <Profile />
        <About />
        <Analysis />
        <Skills />
        <Education data={Experiencedata} />
        <Education data={Educationdata} />
        <Certificate />
        <Rating />
      </div>
      <div className="rightSideBar">
        <RightSideBar />
      </div>
    </ProfileWrapper>
  );
};

export default MyProfile;

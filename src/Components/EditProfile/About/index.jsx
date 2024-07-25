import React from "react";
import { AboutWrap } from "./about.styles";
import backimg from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import { StyledTextarea } from "../../TextField/Texfield.styles";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
const About = ({ formData, setFormData, handleChange, handleSubmit }) => {
  const navigate = useNavigate();
  const backToProfile = () => {
    navigate("/profile");
  };
  return (
    <AboutWrap>
      <div className="info" onClick={backToProfile}>
        <img src={backimg} alt="" />
        <h4 className="heading">About Yourself</h4>
      </div>
      <p>
        You can write about your years of experience, industry, or skills.
        People also talk about their achievements or previous job experiences.
      </p>
      <TextField
        variant="textarea"
        parentClass="textareaHolder"
        onChange={handleChange}
        name="bio"
        value={formData.bio}
      />
      <p>0/2000</p>
      <Button width="177px" onClick={handleSubmit}>Save</Button>
    </AboutWrap>
  );
};

export default About;

import React, { useState } from "react";
import backimg from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import { SkillWrap } from "./skill.styles";
import { FaGreaterThan } from "react-icons/fa6";

const ProfileSkills = ({ formData, setFormData, handleChange ,handleSubmit}) => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState(formData?.skills);
  const [skillInput, setSkillInput] = useState("");

  const backToProfile = () => {
    navigate("/profile");
  };

  const handleAddSkill = () => {
    if (skillInput.trim() !== "" && skills.length < 5) {
      setFormData({
        ...formData,
        skills: [...skills, skillInput.trim()],
      })
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddSkill();
    }
  };

  const handleSave = () => {
    console.log("Skills:", skills);
    handleSubmit();
  };

  return (
    <SkillWrap>
      <div className="info" onClick={backToProfile}>
        <img src={backimg} alt="Back" />
        <h4 className="heading">Add Skills</h4>
      </div>
      <p>Show your top skills — add up to 5 skills you want to be known for.</p>
      <TextField
        hasicon={<FaGreaterThan />}
        parentClass="inputHolder"
        className="input-field"
        field_Name="skills"
        type="text"
        placeholder="Skills : ( ex : Management )"
        name="skills"
        value={skillInput}
        onChange={(e) => setSkillInput(e.target.value)}
        onKeyPress={handleKeyPress}
        bgClr="transparent"
      />
      <div className="managementWrap">
        <div className="flex">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>
      <Button width="177px" onClick={handleSave}>Save</Button>
    </SkillWrap>
  );
};

export default ProfileSkills;

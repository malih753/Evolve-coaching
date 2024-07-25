import React from "react";
import backimg from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import { EducationWrap } from "./education.styles";
const Education = ({ formData, setFormData, handleChange, handleSubmit }) => {
  const navigate = useNavigate();
  const backToProfile = () => {
    navigate("/profile");
  };
  return (
    <EducationWrap>
      <div className="info" onClick={backToProfile}>
        <img src={backimg} alt="" />
        <h4 className="heading">Add education details</h4>
      </div>
      <p>Add your education details</p>
      <TextField
        parentClass="inputHolder"
        className="input-field"
        field_Name="school"
        type="text"
        label="School / University"
        name="school"
        value={formData.educationDetails[0]?.school}
        onChange={(e) => {
          setFormData({
            ...formData,
            educationDetails: [
              {
                ...formData.educationDetails[0],
                school: e.target.value,
              },
            ],
          });
        }}
        bgClr="transparent"
      />
      <TextField
        parentClass="inputHolder"
        className="input-field"
        field_Name="degree"
        type="text"
        label="Degree"
        name="degree"
        value={formData.educationDetails[0]?.degree}
        onChange={(e) => {
          setFormData({
            ...formData,
            educationDetails: [
              {
                ...formData.educationDetails[0],
                degree: e.target.value,
              },
            ],
          });
        }}
        bgClr="transparent"
      />
      <TextField
        parentClass="inputHolder"
        className="input-field"
        field_Name="specialization"
        type="text"
        label="Specialization"
        name="specialization"
        value={formData.educationDetails[0]?.specialization}
        onChange={(e) => {
          setFormData({
            ...formData,
            educationDetails: [
              {
                ...formData.educationDetails[0],
                specialization: e.target.value,
              },
            ],
          });
        }}
        bgClr="transparent"
      />
      <div className="flex">
        <TextField
          parentClass="inputHolder"
          className="input-field"
          field_Name="StartDate"
          type="text"
          label="Start Date"
          name="StartDate"
          value={formData.educationDetails[0]?.startDate}
          onChange={(e) => {
            setFormData({
              ...formData,
              educationDetails: [
                {
                  ...formData.educationDetails[0],
                  startDate: e.target.value,
                },
              ],
            });
          }}
          bgClr="transparent"
        />
        <TextField
          parentClass="inputHolder"
          className="input-field"
          field_Name="EndDate"
          type="text"
          label="End Date"
          name="EndDate"
          value={formData.educationDetails[0]?.endDate}
          onChange={(e) =>
            setFormData({
              ...formData,
              educationDetails: [
                {
                  ...formData.educationDetails[0],
                  endDate: e.target.value,
                },
              ],
            })
          }
          bgClr="transparent"
        />
      </div>
      <TextField
        parentClass="inputHolder"
        className="input-field"
        field_Name="Grade"
        type="text"
        label="Grade"
        name="Grade"
        value={formData.educationDetails[0]?.grade}
        onChange={(e) =>
          setFormData({
            ...formData,
            educationDetails: [
              {
                ...formData.educationDetails[0],
                grade: e.target.value,
              },
            ],
          })
        }
        bgClr="transparent"
      />
      <TextField
        parentClass="inputHolder"
        className="input-field"
        field_Name="cityDescription"
        type="text"
        label="Description"
        name="description"
        value={formData.educationDetails[0]?.description}
        onChange={(e) =>
          setFormData({
            ...formData,
            educationDetails: [
              {
                ...formData.educationDetails[0],
                description: e.target.value,
              },
            ],
          })
        }
        bgClr="transparent"
      />

      <Button width="177px" onClick={handleSubmit}>Save</Button>
      <button className="bton">+</button>
    </EducationWrap>
  );
};

export default Education;

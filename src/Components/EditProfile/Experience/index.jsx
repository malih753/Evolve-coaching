import React, { useEffect, useState } from "react";
import backimg from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import { ExperienceWrap } from "./Experience.styles";
import { RiArrowDropDownLine } from "react-icons/ri";

const Experience = ({ formData, setFormData, handleChange, handleSubmit }) => {
  const [description, setDescription] = useState(
    formData?.coachingExperience[0]?.description
  );
  const navigate = useNavigate();
  const backToProfile = () => {
    navigate("/profile");
  };

  const [experienceDropdownOpen, setExperienceDropdownOpen] = useState(false);
  const [yearsDropdownOpen, setYearsDropdownOpen] = useState(false);

  const [experienceOptions, setExperienceOptions] = useState([
    { label: "Women Empowerment", value: "WomenEmpowerment", checked: false },
    { label: "Talent Management", value: "TalentManagement", checked: false },
    { label: "Junior Employees", value: "JuniorEmployees", checked: false },
    { label: "Anonymous Forum", value: "AnonymousForum", checked: false },
    {
      label: "Employee Personal Development Program",
      value: "employee",
      checked: false,
    },
    {
      label: "Employee Growth Program",
      value: "Employeesprogram",
      checked: false,
    },
    {
      label: "Other.................................................",
      value: "others",
      checked: false,
    },
  ]);

  const [yearsOptions, setYearsOptions] = useState([
    { label: "00 To 2 Years", value: "yeartwo", checked: false },
    { label: "02 To 05 Years", value: "yearfive", checked: false },
    { label: "05 To 10 Years", value: "yearten", checked: false },
    { label: "10 To 15 Years", value: "yearfiften", checked: false },
    { label: "15+ Years", value: "yearsixteen", checked: false },
  ]);

  const handleCheckboxChange = (index, options, setOptions) => {
    const newOptions = [...options];

    newOptions[index].checked = !newOptions[index].checked;
    setOptions(newOptions);
  };

  const toggleDropdown = (setDropdownOpen, otherDropdownSetOpen) => {
    setDropdownOpen((prevState) => !prevState);
    otherDropdownSetOpen(false);
  };

  const getSelectedOptionsText = (options) => {
    return (
      options
        .filter((option) => option.checked)
        .map((option) => option.label)
        .join(", ") || "Select..."
    );
  };

  useEffect(() => {
    if (formData.coachingExperience) {
      const titles = formData.coachingExperience?.map((t) => t.title);
      titles.forEach((element) => {
        experienceOptions
          .filter((o) => o.label === element)
          .map((option) => (option.checked = true));
      });
      console.log(titles);
      const years = formData.coachingExperience?.map(
        (y) => y.yearsOfExperience
      );
      console.log(years);
      years.forEach((elem) => {
        yearsOptions
          .filter((i) => i.label === elem)
          .map((option) => (option.checked = true));
      });
    }

    const selectedTitles = experienceOptions
      .filter((option) => option.checked)
      .map((checked) => checked.label);

    const selectedYears = yearsOptions
      .filter((option) => option.checked)
      .map((checked) => checked.label);
      console.log(selectedYears)
  

    const data = selectedTitles.map((title, index) => ({
      title,
      yearsOfExperience: selectedYears[index] || "N/A", // Default to "N/A" if no year is selected
      description,
    }));

    setFormData({
      ...formData,
      coachingExperience: data,
      // yearOfExperience:selectedYears.join(" ")
    });

    console.log(formData);
  }, [experienceOptions, yearsOptions, description]);

  return (
    <ExperienceWrap>
      <div className="info" onClick={backToProfile}>
        <img src={backimg} alt="back" />
        <h4 className="heading">Add Coaching Experience</h4>
      </div>
      <p>Add your past or current working position</p>
      <label>
        Coaching Experience
        <div className="dropdown-container">
          <div
            className="dropdown-header"
            onClick={() =>
              toggleDropdown(setExperienceDropdownOpen, setYearsDropdownOpen)
            }
          >
            {getSelectedOptionsText(experienceOptions)}
            <RiArrowDropDownLine size={24} />
          </div>
          {experienceDropdownOpen && (
            <div className="dropdown">
              {experienceOptions.map((option, index) => (
                <div key={option.value} className="dropdown-option">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={option.checked}
                    onChange={() =>
                      handleCheckboxChange(
                        index,
                        experienceOptions,
                        setExperienceOptions
                      )
                    }
                    id={option.value}
                  />
                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </label>
      <label>
        Experience in Years
        <div className="dropdown-container">
          <div
            className="dropdown-header"
            onClick={() =>
              toggleDropdown(setYearsDropdownOpen, setExperienceDropdownOpen)
            }
          >
            {getSelectedOptionsText(yearsOptions)}
            <RiArrowDropDownLine size={24} />
          </div>
          {yearsDropdownOpen && (
            <div className="dropdown">
              {yearsOptions.map((option, index) => (
                <div key={option.value} className="dropdown-option">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={option.checked}
                    onChange={() =>
                      handleCheckboxChange(index, yearsOptions, setYearsOptions)
                    }
                    id={option.value}
                  />
                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </label>
      <TextField
        variant="textarea"
        label="Description"
        parentClass="textareaHolder"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button width="177px" onClick={handleSubmit}>
        Save
      </Button>
      <button className="bton">+</button>
    </ExperienceWrap>
  );
};

export default Experience;

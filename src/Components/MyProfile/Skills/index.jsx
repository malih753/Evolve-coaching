import React from "react";
import { SkillsWrap } from "./Skills.styles";
import { TbPencil } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
const Skills = () => {
  return (
    <SkillsWrap>
      <div className="wrapper">
        <div className="flexwrap">
          <h2>Skills</h2>
          <div className="icons">
            <FaPlus />
            <TbPencil />
          </div>
        </div>
        <div className="skillsHold">
          <div className="flex">
            <h5>Primary</h5>
            <div className="skill">
              <span>Talent Management</span>
            </div>
          </div>
          <div className="flex">
            <h5>Secondary</h5>
            <div className="skill">
              <span>Talent Management</span>
              <span>Talent Management</span>
            </div>
          </div>
        </div>
      </div>
    </SkillsWrap>
  );
};

export default Skills;

import React from "react";
import { AboutWrap } from "./About.styles";
import { TbPencil } from "react-icons/tb";
const About = () => {
  return (
    <AboutWrap>
      <div className="wrapper">
      <div className="flex">
      <h2>About Coach</h2>
      <TbPencil />
      </div>
      <p>
        I'm a UI/UX designer with a degree in Computer science and Engineering.
        My interest in Human behaviour and Human centred solution has motivated
        me to switch in UI /UX. I have experience in designing screens for
        Android and Web which has proved me in upgrading my skills.
      </p>
      </div>
    </AboutWrap>
  );
};

export default About;

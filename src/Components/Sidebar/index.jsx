import React from "react";
import { SidebarWrap } from "./Sidebar.styles";
import { data } from "./data";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <SidebarWrap>
      <div className="sidebarHolder">
        <ul>
          {data.map((val, ind) => (
            <li key={ind}>
              <NavLink to={val.link} activeClassName="active">
                <img src={val.img} alt="images" />
                {val.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </SidebarWrap>
  );
};

export default Sidebar;

import React, { useEffect, useState } from "react";
import { HomeWrapper } from "./Home.styles";
import RightSideBar from "../rightSideBar";
import Profile from "../MyProfile/Profile";
import Analysis from "../MyProfile/Analysis";
import Session from "./sessionCard/Session";
import UpcomingSession from "./UpcomingSession";
import AnalysisSession from "./AnalysisSession";
import CustomRightSidebar from "../rightSideBar/CustomRightSidebar";
import UpgradeCourse from "../rightSideBar/UpgradeCourse";
import Footer from "../Footer";
import RequestMeeting from "../rightSideBar/meeting/RequestMeeting";
import Earning from "../rightSideBar/Earning";
import AddedSession from "../rightSideBar/AddedSession";
import axios from "axios";
import { serverDomain } from "../../Constant/serverDomain";

const Home = ({ formData }) => {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axios.get(
          `${serverDomain}/session/${formData?.id}/coach`
        );
        setSessions(response.data.sessions);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSessions();
  }, []);

  return (
    <HomeWrapper>
      <div className="home">
        <Profile avatar={formData?.avatar} cover={formData?.cover} />
        <Analysis />
        <AnalysisSession />
        <Session title="All Sessions" sessions={sessions} />
        <UpcomingSession />
        <Session title="Upcoming Group Sessions" />
      </div>
      <div className="rightSideBar">
        <CustomRightSidebar>
          <div className="earning">
            <Earning />
          </div>
          <div className="rightsidebarContent">
            <RequestMeeting />
          </div>
          <div className="addedSession">
            <AddedSession />
          </div>
          <div className="rightsidebarContent">
            <UpgradeCourse />
          </div>
          <div className="rightsidebarContent">
            <Footer />
          </div>
        </CustomRightSidebar>
      </div>
    </HomeWrapper>
  );
};

export default Home;

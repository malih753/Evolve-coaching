import React, { useState } from "react";
import { SessionCardWrap } from "./SessionCard.styles";
import calendar from "../../../assets/profile/calendar.png";
import time from "../../../assets/profile/time.png";
import { BsPencil } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button/index";

const SessionCard = ({ sessions }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleViewSession = (session) => {
    setIsLoading(true); // Set loading state
    setTimeout(() => { // Simulate loading delay
      setIsLoading(false);
      navigate("/viewSession", { state: { sessionData: session } });
    }, 1000); // Simulated 1 second loading time
  };

  return (
    <SessionCardWrap>
      <div className="cardWrap">
        {sessions.map((session, index) => (
          <div className="wrapper" key={index}>
            <div className="cardHold">
              <figure>
                <img src={session.uploadedImage} alt="session" />
              </figure>
              <blockquote>
                <q>{session.about}</q>
                <h3>{session.title}</h3>
                <div className="timeWrap">
                  <cite>
                    <img src={calendar} alt="calendar" />
                    <span>
                      {session.startDate ? session.startDate.toDateString() : ''} - {session.endDate ? session.endDate.toDateString() : ''}
                    </span>
                  </cite>
                  <cite>
                    <img src={time} alt="time" />
                    <span>
                      {session.startTime} - {session.endTime}
                    </span>
                  </cite>
                </div>
              </blockquote>
              <div className="iconBtn">
                <Link to="/">
                  <BsPencil />
                </Link>
                <button onClick={() => handleViewSession(session)}>
                  <FaRegEye />
                </button>
              </div>
            </div>
            <div className="btn">
              <Button width="128px">Join</Button>
            </div>
          </div>
        ))}
      </div>
      {isLoading && <div>Loading...</div>} {/* Display loading indicator */}
    </SessionCardWrap>
  );
};

export default SessionCard;

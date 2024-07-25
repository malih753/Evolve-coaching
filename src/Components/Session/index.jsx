import React, { useState } from "react";
import { SessionWrapper } from "./Session.styles";
import RightSideBar from "../rightSideBar";
import SessionSearchbar from "./SessionSearchbar";
import SessionCard from "./SessionCard";
import ViewSession from "./VewSession";
import CreateSession from "./CreateSession";

const Session = ({formData,user}) => {
  const [sessions, setSessions] = useState([]);
  const [view, setView] = useState(false);
  const [create, setCreate] = useState(false);

  const viewHandler = () => {
    setView(true);
    setCreate(false);
  };

  const createHandler = () => {
    setCreate(true);
    setView(false);
  };

  const backToSessionsHandler = () => {
    setCreate(false);
    setView(false);
  };

  const handleSaveSession = (newSession) => {
    setSessions([...sessions, newSession]);
    backToSessionsHandler();
  };

  return (
    <SessionWrapper>
      {view ? (
        <div className="viewSession">
          <ViewSession />
        </div>
      ) : create ? (
        <div className="CreateSession">
          <CreateSession click={backToSessionsHandler} onSave={handleSaveSession} user={user} data={formData}/>
        </div>
      ) : (
        <div className="sessions">
          <div className="searchbar">
            <SessionSearchbar createHandle={createHandler} />
          </div>
          <div className="card">
            <SessionCard sessions={sessions} clickHandle={viewHandler} />
          </div>
        </div>
      )}
      <div className="rightSideBar">
        <RightSideBar />
      </div>
    </SessionWrapper>
  );
};

export default Session;

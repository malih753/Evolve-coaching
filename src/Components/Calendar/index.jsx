import React, { useState } from "react";
import { CalendarWrap } from "./Calendar.styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CalendarHeader from "./CalendarHeader";
import TimeSlots from "./TimeSlots";
import LectureSchedule from "../LectureSchedule";

const Calendar = () => {
  const [lecture, setLecture] = useState(false);
  const BackToPage = () => {
    setLecture(false);
  };
  const Lecturehandle = () => {
    setLecture(true);
  };
 
  return (
    <>
      <CalendarWrap>
       
        {!lecture ? (
          <div className="calenderHolder">
            <h4>
              Tuesday, November 30 2024 <FaAngleLeft />
              <FaAngleRight />
            </h4>
            <CalendarHeader />
            <TimeSlots click={Lecturehandle} />
          </div>
        ) : (
          <LectureSchedule BackToPage={BackToPage} />
        )}
      </CalendarWrap>
    </>
  );
};

export default Calendar;

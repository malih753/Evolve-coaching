import React from "react";
import { TicketsWrap } from "./Tickets.styles";
import { TicketData } from "../../../Constant/Data";
import Button from "../../Button";
const Tickets = ({title, type, width, name, click = () => {} }) => {
  return (
    <TicketsWrap>
      <h4>{title}</h4>
      <div className="cardHolder">
        {TicketData.map((value, index) => (
          <div className="ticketCard" key={index}>
            <img src={value.img} alt="support" />
            <div className="heading">
              <h4>{value.title}</h4>
              <span>{value.date}</span>
            </div>
            <div className="btnHolder">
              <span>{value.id}</span>
              <Button width={width} type={type} onClick={()=>click()}>
                {name}
              </Button>
              
            </div>
          </div>
        ))}
      </div>
    </TicketsWrap>
  );
};

export default Tickets;

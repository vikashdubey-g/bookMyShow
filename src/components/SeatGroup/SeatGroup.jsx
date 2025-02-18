import React from "react";
import SeatRow from "../SeatRow/SeatRow";
import "./SeatGroup.css";

const SeatGroup = ({ groupName, seatRow }) => {
  return (
    <div className="seat-group">
      <div className="group-name">{groupName}</div>
      {seatRow?.map((data, index) => (
        <SeatRow key={index} {...data} />
      ))}
    </div>
  );
};

export default SeatGroup;

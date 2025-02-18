import React from "react";
import Seat from "./Seat";
import "./SeatRow.css";

const SeatRow = ({ label, seat }) => {
  return (
    <div className="seat-row">
      <div className="row-label">{label}</div>
      <div className="seats">
        {seat.map((seat, index) => (
          <Seat key={index} seat={seat} />
        ))}
      </div>
    </div>
  );
};

export default SeatRow;

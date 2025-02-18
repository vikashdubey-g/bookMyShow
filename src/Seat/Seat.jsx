import React from 'react';
import "./Seat.css";

const Seat = ({ seat }) => {
  return (
    <div className={`seat ${seat.type}`} style={{ backgroundColor: seat.color }}>
      {seat.id}
    </div>
  );
}

export default Seat;

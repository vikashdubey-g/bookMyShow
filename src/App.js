import logo from "./logo.svg";
import "./App.css";
import SeatGroup from "./components/SeatGroup/SeatGroup";
import { useState } from "react";
import seatData from "./seatData";

function App() {
  const [seats, setSeats] = useState(seatData);
  return (
    <div className="App">
      {seats?.map((data, index) => (
        <SeatGroup key={index} {...data} />
      ))}
    </div>
  );
}

export default App;

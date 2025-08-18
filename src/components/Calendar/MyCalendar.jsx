import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import "./MyCalendar.css";

function MyCalendar() {
  const [value, setValue] = useState(new Date());


  const formattedDate = value.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="dates">
      <h2>Next Available Dates</h2>
      <Calendar className="calendar" onChange={setValue} value={value} />

     <div>
       <h3>Book slot for {formattedDate}</h3>
      <p>9 am - 12 am</p>
     </div>
    </div>
  );
}

export default MyCalendar;

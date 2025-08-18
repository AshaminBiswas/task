import React from "react";
import one from "../../assets/info section icons/icon_one.png";
import two from "../../assets/info section icons/icon_two.png";
import three from "../../assets/info section icons/icon_three.png";
import four from "../../assets/info section icons/icon_four.png";
import "./Discover.css"
function Discover() {
  return (
    <div className="discover">
      <h2>Discover Local Culture with a Balinese Family (Tiwi)</h2>
      <ul>
        <li>
          <img src={one} alt="" />
          <p>Walk through the rice fields with Tiwi</p>
        </li>
        <li>
          <img src={two} alt="" />
          <p> Learn how to make offerings & coconut oil</p>
        </li>
        <li>
          <img src={three} alt="" />
          <p>Cook & enjoy an authentic Balinese lunch</p>
        </li>
        <li>
          <img src={four} alt="" />
          <p> Option to stay overnight in the family home</p>
        </li>
        <li>
          <img src={four} alt="" />
          <p>The host speaks french and english</p>
        </li>
      </ul>
    </div>
  );
}

export default Discover;

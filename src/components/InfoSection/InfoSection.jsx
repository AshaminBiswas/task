import React from "react";
import { Link } from "react-router-dom";
import "./InfoSection.css";
//icons import
import { IoIosStar } from "react-icons/io";
import iconOne from "../../assets/info section icons/icon_one.png";
import iconTwo from "../../assets/info section icons/icon_two.png";
import iconThree from "../../assets/info section icons/icon_three.png";
import iconFour from "../../assets/info section icons/icon_four.png";

import Location from "../../assets/info section icons/mdi_location.png";
import Timer from "../../assets/info section icons/mingcute_time-fill.png";
import MaterialTrip from "../../assets/info section icons/material-symbols_trip.png";

import Star from "../../assets/info section icons/star.png";
import ButtonArrow from "../../assets/info section icons/material-symbols_call.png";
import slider from "../../utils/highlight";
import Highlight from "../Highlight/Highlight";
import Discover from "../Discover/Discover";
import MyCalendar from "../Calendar/MyCalendar";
import AdditionalInfo from "../Aditional Info/AdditionalInfo";
function InfoSection() {
  return (
    <div className="info-section">
      <div className="info-section-col1">
        <div className="experiences">
          <div>
            <h2>Experience a Day with a Balinese Family</h2>
            <p className="text">
              Slow down. Watch the light move across the rice fields. Learn how
              to make coconut oil the way it’s been done for generations. This
              is Bali with soul — the part you don’t find in guidebooks.
            </p>
            <div>
              <p className="question">
                How can I connect with locals without it feeling forced or
                touristy?
              </p>
              <p className="text">
                You spend a day with Tiwi and her family. You help make
                offerings, walk their land, cook lunch together, and share
                stories. No performance. Just presence
              </p>
            </div>
            <div className="included">
              <h3>What’s included?</h3>
              <div>
                <img src={iconOne} alt="iconOne" />
                <p>Walk through the rice fields with Tiwi</p>
              </div>
              <div>
                <img src={iconTwo} alt="iconTwo" />
                <p> Learn how to make offerings & coconut oil</p>
              </div>
              <div>
                <img src={iconThree} alt="iconThree" />
                <p>Cook & enjoy an authentic Balinese lunch</p>
              </div>
              <div>
                <img src={iconFour} alt="iconFour" />
                <p> Option to stay overnight in the family home</p>
              </div>
            </div>
            <div className="services">
              <div>
                <img src={Location} alt="Location" />
                <p>Village near Ubud</p>
              </div>
              <div>
                <img src={Timer} alt="Timer" />
                <p>9am - 12am</p>
              </div>
              <div>
                <img src={MaterialTrip} alt="MaterialTrip" />
                <p>Privet</p>
              </div>
            </div>
          </div>
        </div>
        <Highlight slider={slider}/>
        <Discover/>
        <MyCalendar/>
        <AdditionalInfo/>
      </div>
      <div className="info-section-col2">
        <div>
          <div className="rating">
            <div className="stars">
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
            </div>
            <p>4.9 (120)</p>
          </div>
          <h2>From IDR 150,000.00/ Person</h2>
          <Link>
            <p>Show Prices</p>
          </Link>
        </div>
        <form>
          <select name="Guests" id="">
            <option value="Guests">Guests</option>
          </select>
          <input type="datetime" name="" id="" placeholder="Date and Time" />
          <input type="text" name="" id="" placeholder="Select Add ons" />

          <button>
            Reserve for free <img src={ButtonArrow} alt="ButtonArrow" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default InfoSection;

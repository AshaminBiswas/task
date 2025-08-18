import React, { useState } from "react";
import "./AdditionalInfo.css";
import open from "../../assets/additional info icons/open.png";
import close from "../../assets/additional info icons/close.png";
function AdditionalInfo() {
  const [icon, setIcon] = useState(true);
  return (
    <div className="additional-info">
      <h2>Additional Information</h2>
      <div className="info">
        <div className="headings">
          <h3>Where will we meet?</h3>
          {icon ? (
            <img className="cursor" onClick={() => setIcon(!icon)} src={open} />
          ) : (
            <img className="cursor" onClick={() => setIcon(!icon)} src={close} />
          )}
        </div>
        {icon ? null : <div className="open-info">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d126241.82782683405!2d115.13771077699802!3d-8.59050699834062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUbud%2C%20Canggu%2C%20Seminyak%2C%20or%20Sanur%20area!5e0!3m2!1sen!2sin!4v1755418079333!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="details">
              <p><span>Pickup & Drop-off Location:</span> Your hotel or villa within Ubud, Canggu, Seminyak, or Sanur areas</p>
              <p><span>Pickup Time:</span> 7:30 AM – We’ll confirm the exact time based on your location</p>
              <p><span>Drop-off Time:</span>Around 4:30 PM (depending on traffic and group pace)</p>
              <p><span>Private Transfers</span>Clean, air-conditioned vehicle with a friendly local driver</p>
            </div>
          </div>}
      </div>

      <div className="info">
         <div className="headings">
          <h3>Start and Ends</h3>
          <img className="cursor" src={open} alt="" />
        </div>
      </div>

      <div className="info">
         <div className="headings">
          <h3>Suitability / Accessibility</h3>
          <img className="cursor" src={open} alt="" />
        </div>
      </div>
      <div className="info">
         <div className="headings">
          <h3>Cancellation and other policies</h3>
          <img className="cursor" src={open} alt="" />
        </div>
      </div>
      <div className="info">
         <div className="headings">
          <h3>What to Pack?</h3>
          <img className="cursor" src={open} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AdditionalInfo;

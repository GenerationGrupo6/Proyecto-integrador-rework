import React from "react";
import "./DonationButton.css";
import { Link } from "react-router-dom";

const DonationButton = () => {
  return (
      <Link to='/unete-al-cambio'>
      <button className="Donation-Button" >Haz tu Aporte Aquí</button>
      </Link>
  )
};

export { DonationButton };
  
  


import React from "react";
import "./VolunteerButton.css";
import { Link } from "react-router-dom";

const VolunteerButton = () => {
  return (
    <button className="Donation-Button">
      <Link to="/nosotros" id="volunteerform">
        Postula Aquí
      </Link>
    </button>
  );
};

export { VolunteerButton };

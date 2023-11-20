import React from "react";
import "./WhyUs.css";

function WhyUs(props) {
    return (

    <div className="Container-Arguments-Why-Canastas-De-Vida-About-Us-Page">
      <img
        className="Image-Arguments-Why-Canastas-De-Vida-About-Us-Page"
        src={props.image}
      />
      <div className="Text-Arguments-Why-Canastas-De-Vida-About-Us-Page">
        <h2 className="Title-Arguments-Why-Canastas-De-Vida-About-Us-Page">
          {props.title}
        </h2>
        <p className="Reason-Arguments-Why-Canastas-De-Vida-About-Us-Page">
          {props.reason}
        </p>
      </div>
    </div>
  );
}

export { WhyUs };

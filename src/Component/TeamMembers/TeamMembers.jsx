import React from "react";
import "./TeamMembers.css";


function TeamMembers(props) {
  return (
    <div className="Members-Cards-Fifth-Section-About-Us-Page">
      <div className="Single-Members-Card-Fifth-Section-About-Us-Page">
              <img className="Image-Members-Card-Fifth-Section-About-Us-Page" src={props.image}/>
      </div>
      <div className="Text-Members-Card-Fifth-Section-About-Us-Page">
        <h2 className="Name-Members-Card-Fifth-Section-About-Us-Page">
          {props.name}
        </h2>
        <p className="Age-Members-Card-Fifth-Section-About-Us-Page">
          {props.age}
        </p>
      </div>
    </div>
  );
}

export { TeamMembers };

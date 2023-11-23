import React from "react";
import "./HowBtn.css";
import { Link } from "react-router-dom";

const HowBtn = () => {
  return (
      <Link to='/HowDoesIt2'>
      <button className='botoncomofunciona'>Comó funciona</button>
      </Link>
  )
};

export { HowBtn };
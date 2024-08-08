import React from 'react'
import nepAutoX from "./nepautox.png"
import "./Banner.css";
const Banner = () => {
  return (
     <div className="banner">
      <img src={nepAutoX} alt="NepAutoX Logo" id="main-logo" style={{width: "130px", height:"130px"}} />
      <h2 id="banner-title">NepAutoX</h2>
    </div>
  )
}

export default Banner
import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div id="container">
      <div id="loading">
        <span style={{ fontSize: "25px", fontWeight: 'bold' }} id="loading-img">
          Innalytx
        </span>
      </div>
    </div>
  );
};

export default Preloader;

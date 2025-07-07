import React from "react";
import "./Companies.css";
import companie1 from "../../assets/prologis.png"
import companie2 from "../../assets/tower.png"
import companie3 from "../../assets/equinix.png"
import companie4 from "../../assets/realty.png"

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={companie1} alt="" />
        <img src={companie2} alt="" />
        <img src={companie3} alt="" />
        <img src={companie4} alt="" />
      
      </div>
    </section>
  );
};

export default Companies;
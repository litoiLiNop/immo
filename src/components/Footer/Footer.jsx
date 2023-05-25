import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Notre vision c'est de trouver pour <br />
            chacun où vivre le mieux
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 Bocom - Nkoabang</span>
          <div className="flexCenter f-menu">
            <span>Confidentialité</span>
            <span>Services</span>
            <span>Articles</span>
            <span>A Propos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

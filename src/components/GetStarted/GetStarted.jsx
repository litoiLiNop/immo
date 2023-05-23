import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Débuter avec HomaWèm</span>
          <span className="secondaryText">
            Souscrire afin de bénéficier des meilleurs quotes
            <br />
            Trouvez votre résidence
          </span>
          <button className="button">
            <a href="mailto:litoilinop@gmail.com">Débuter</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

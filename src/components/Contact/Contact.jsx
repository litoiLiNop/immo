import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Nous contacter</span>
          <span className="primaryText">C'est facile</span>
          <span className="secondaryText">
            Nous serons toujours prêts à vous offrir le meilleur des services
            sur la place. Nous pensons que le bon evironnement peut améliorer
            votre vie
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              {/* first mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Appel </span>
                    <span className="secondaryText">0694692539</span>
                  </div>
                </div>
                <div className="flexCenter button">Appelez!</div>
              </div>
              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat </span>
                    <span className="secondaryText">0694692539</span>
                  </div>
                </div>
                <div className="flexCenter button">Chattez!</div>
              </div>
            </div>
            {/* second row */}
            <div className="flexStart row">
              {/* Third mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Appel Vidéo </span>
                    <span className="secondaryText">0694692539</span>
                  </div>
                </div>
                <div className="flexCenter button">Appelez!</div>
              </div>
              {/* fourth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message </span>
                    <span className="secondaryText">0694692539</span>
                  </div>
                </div>
                <div className="flexCenter button">Envoyez!</div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

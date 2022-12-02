import React from "react";
import Logo from "../image/logosida.svg";

const Contact = () => {
  document.title = "SexInfo";
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
  return (
    <>
      <div className="contactinfo">
        <div className="welcome-text">
          <h1 className="titrecontact">Nous contacter</h1>
          <ul>
            <li>
              <span>Tel :</span> 0 800 00 69 07
            </li>
            <li>
              <span>Mail :</span> vltdev.pro@gmail.com
            </li>
            <li>
              <span>Web : </span>
              https://www.sida-info-service.org/
            </li>
          </ul>
        </div>

        <img className="img-container" src={Logo} />
      </div>
    </>
  );
};

export default Contact;

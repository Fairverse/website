import React from "react";
import logo from "../assets/background.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <div className="aboutBottom">
        <h1> Hakkımızda</h1>
        <p>
          Fiziksel engele sahip bireylerin erişebilirliklerini arttırmak amacıyla sesli komutları hareket komutlarına dönüştürerek hareketleri deneyimleyebilmelerini sağlıyoruz.
        </p>
      </div>
    </div>
  );
}

export default About;

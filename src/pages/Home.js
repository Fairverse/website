import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/background2.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> METAVERSE İLE ENGELSİZSİNİZ </h1>
        <p> ADİL VE ENGELSİZ</p>
        <Link to="/menu">
          <button> TIKLA VE ARAMIZA KATIL </button>
        </Link>
        <Link to="/token">
          <button className="headerContainer">TOKENA GİT</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

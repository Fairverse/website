import React from "react";
import ekip from "../assets/ekip.png";
import metamask from "../assets/metamask.jpg";
import ready from  "../assets/ready-player.jpg";
import reactjs from "../assets/react-js.jpg";
import unity from "../assets/unity.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div  className="aboutTop" 
      ></div>
      <div className="aboutBottom">
        <h1 className="kullanılan"> Hakkımızda</h1>   
        <h2 className="aboutTop">
          Biz Kimiz?
        </h2>
        <h3 className="bilgi">Bizler Muğla Sıtkı Koçman Üniversitesi Bilgisayar Mühendisliği öğrencileri olarak halihazırda yazılım dillerini öğrenen ve öğrenmeye devam eden, teknoloji meraklısı gençleriz. Yeni teknolojilere açığız ve geleceğe yön vermek istiyoruz. Okulumuzda bulunan Metaverse Araştırma Grubu (MvRG) ile son günlerde revaçta olan metaverse konusunda kendimizi geliştiriyoruz. Takım olarak amacımız; metaverse kavramını kullanarak hayatımızı kolaylaştıracak teknolojik ve yenilikçi içeriklere sahip projelere imza atmaktır. Bu açıdan sosyal faydayı gözeten ve engelli bireylerin erişebilirliklerini arttırabilecek bir proje fikri bizi heyecanlandırıyor.</h3>       
      </div>
      <div>
        <img src={ekip} alt="" className="ekip"></img>
        <h1 className="kullanılan">Kullanılan Teknolojiler</h1>
      </div>
    
      <div>
        <h2>Ready Player Me</h2>
        <a href="https://readyplayer.me/tr"><img src={ready} alt="" className="fotolar"></img></a>
      </div>
      <div>
        <h2>MetaMask</h2>
        <a href="https://metamask.io/"> <img src={metamask} alt="" className="fotolar"></img></a>
      </div>
      <div>
        <h2>React JS</h2>
        <a href="https://tr.reactjs.org/"> <img src={reactjs} alt="" className="fotolar"></img></a>
      </div>
      <div>
        <h2>Unity</h2>
        <a href="https://unity.com/"> <img src={unity} alt="" className="fotolar"></img></a>
      </div>
    </div>
  );
}

export default About;

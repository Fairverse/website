import React from "react";

import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div  className="aboutTop" 
      ></div>
      <div className="aboutBottom">
        <h1> Hakkımızda</h1>   
        <h2 className="aboutTop">
          Biz Kimiz?
        </h2>
        <h3>Bizler Muğla Sıtkı Koçman Üniversitesi Bilgisayar Mühendisliği öğrencileri olarak halihazırda yazılım dillerini öğrenen ve öğrenmeye devam eden, teknoloji meraklısı gençleriz. Yeni teknolojilere açığız ve geleceğe yön vermek istiyoruz. Okulumuzda bulunan Metaverse Araştırma Grubu (MvRG) ile son günlerde revaçta olan metaverse konusunda kendimizi geliştiriyoruz. Takım olarak amacımız; metaverse kavramını kullanarak hayatımızı kolaylaştıracak teknolojik ve yenilikçi içeriklere sahip projelere imza atmaktır. Bu açıdan sosyal faydayı gözeten ve engelli bireylerin erişebilirliklerini arttırabilecek bir proje fikri bizi heyecanlandırıyor.</h3>
        
      </div>
      <div>
      <h2 className="aboutTop">
          Hedef Kitlemiz
        </h2>
        <h3>Projemizdeki hedef kitle; fiziksel engele sahip bireylerdir. Kullanıcılardan sesli komutları alıp
görüntü ve ses komutları olarak geri dönüt vereceğimiz için bireyin konuşma ve görme
yeteneklerini kaybetmemiş olması gerekmektedir. İşitme engelli bireyler de görme
duyusundan faydalanarak sistemden yararlanabilecektir. Bu tür engelli dostlarımızla prototipin
denenmesi hedeflenmektedir.</h3>

      </div>


    </div>
  );
}

export default About;

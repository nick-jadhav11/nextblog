import React from "react";
import Kingfisher from "@/Assets/kingfisher.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="main-banner">
        <Image src={Kingfisher} alt="" className="main-banner-img" />
        <h1 className="banner-text">Welcome Text Goes Here</h1>
      </div>
    </section>
  );
};

export default Banner;

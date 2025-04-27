import React from "react";
import Image from "next/image";
import Bird from '@/Assets/bird.jpg'

const AboutSection = () => {
  return (
    <section className="section">
      <h1 className="main-section-title">Section Title</h1>
      <div className="about-section">
        <div className="about-content">
          <h1>Welcome to CSS Web App</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            dolore ducimus, doloremque explicabo molestias repellendus! Pariatur
            et in ab ducimus sunt tenetur earum voluptatum. Expedita unde
            ducimus minima reiciendis soluta? Velit corrupti laboriosam nostrum
            eaque, unde amet, itaque, ullam nam ad nemo autem. Inventore
            repellat nisi voluptate tempore ipsa ratione veniam architecto
            soluta, exercitationem libero quam dolorem, minima aspernatur neque.
          </p>
        </div>
        <div className="about-img-section">
          <Image
            src={Bird}
            alt=""
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

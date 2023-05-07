import React from "react";
import portrait from "../../images/portrait.jpeg";
import "./AboutMe.scss";
function AboutMe() {
  return (
    <div className="aboutMeWrapper">
      <div className="aboutMeImageWrapper">
        <img src={portrait} />
      </div>

      <div className="aboutMeDescriptionWrapper">
        <div className="aboutMeDescription">
          {" "}
          As a freelance photographer based in Miami, my work is all about
          capturing the essence of wellness, natural aesthetics, and human
          connection. I specialize in using natural light and soft tones to
          create stunning images that truly reflect the beauty of my subjects.
          Whether I'm shooting art in nature or the relationships between
          people, my goal is always to capture those special moments that make
          life worth living. With a passion for wellness and an eye for detail,
          I pride myself on delivering stunning images that not only look
          beautiful but also tell a story. If you're looking for a photographer
          who can capture the beauty in people and nature alike, then look no
          further than me.
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

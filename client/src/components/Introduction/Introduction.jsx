import React, { useEffect, useState } from "react";
import portrait from "../../images/portrait.jpeg";
import "./Introduction.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Introduction() {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (inView || scrollPosition > 100) {
      controls.start("visible");
    }
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, inView, scrollPosition]);

  const imgVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    transition: {
      duration: 1,
      ease: "easeOut", // Apply a specific easing function for smoother animation
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut", // Apply a specific easing function for smoother animation
      },
    },
  };

  return (
    <section className="section-introduction">
      <div className="introduction-wrapper">
        <motion.div
          ref={ref}
          className="introduction-image-wrapper"
          animate={controls}
          initial="hidden"
          variants={imgVariants}
          transition={{ duration: 2 }}
        >
          <img src={portrait} />
        </motion.div>

        <motion.div
          className="introduction-description-wrapper"
          animate={controls}
          initial="hidden"
          variants={textVariants}
          ref={ref}
        >
          <h2 className="introduction-title">
            Hi, I'm Amadou. Lifestyle photographer based in Miami{" "}
          </h2>
          <p className="introduction-description">
            {" "}
            As a freelance photographer my art is all about capturing the
            essence of wellness, natural aesthetics, and human connection. I
            specialize in using natural light and soft tones to create stunning
            images that truly reflect the beauty of my subjects. Whether I'm
            shooting art in nature or the relationships between people, my goal
            is always to capture those special moments that make life worth
            living. With a passion for wellness and an eye for detail, I pride
            myself on delivering stunning images that not only look beautiful
            but also tell a story. If you're looking for a photographer who can
            capture the beauty in people and nature alike, then look no further
            than me.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Introduction;

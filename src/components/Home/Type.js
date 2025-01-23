import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Android Developer",
          "Web Developer",
          "Full Stack developer",
          "Graphic Designer",
          "Machine Learning and AI Engineer",
          "Deep Learning Enthusiast",
          "System Administrator"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Professional",
          "GARMEN Stack",
          "Friendly and Attentive",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default Type;

import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "../../public/animation-moon.json";

export default function AnimationMoon() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      //   style={{ width: 150, height: 150 }}
    />
  );
}

import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "../../public/animation-upper.json";

export default function AnimationUpper() {
  return (
    <Lottie
      speed={2}
      color="white"
      loop
      animationData={lottieJson}
      play
      style={{ width: 50 }}
    />
  );
}

import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "../../public/animation-circle.json";

export default function AnimationCircle() {
  return (
    <Lottie
      speed={1.5}
      loop
      animationData={lottieJson}
      play
      style={{ opacity: 0.5 }}
    />
  );
}

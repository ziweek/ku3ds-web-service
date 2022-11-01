import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "../../public/animation-particle.json";

export default function AnimationParticle() {
  return (
    <Lottie
      speed={2}
      loop
      animationData={lottieJson}
      play
      //   style={{ width: 150, height: 150 }}
    />
  );
}

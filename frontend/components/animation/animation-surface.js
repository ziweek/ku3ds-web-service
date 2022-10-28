import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "../../public/animation-surface.json";

export default function AnimationSurface() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      //   style={{ width: 150, height: 150 }}
    />
  );
}

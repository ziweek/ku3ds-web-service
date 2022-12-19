import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "../../public/animation-planet-saturn.json";

export default function AnimationSaturn() {
  return (
    <Lottie loop animationData={lottieJson} play style={{ height: 150 }} />
  );
}

import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "../../public/animation-rocket.json";

export default function AnimationRocket() {
  return <Lottie loop animationData={lottieJson} play />;
}

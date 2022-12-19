import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "../public/lotties/next.json";

export default function AnimationButton() {
  return <Lottie loop animationData={lottieJson} play style={{ width: 100 }} />;
}

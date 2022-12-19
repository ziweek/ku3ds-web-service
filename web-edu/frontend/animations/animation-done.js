import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "../public/lotties/done.json";

export default function AnimationDone() {
  return <Lottie loop animationData={lottieJson} play style={{ width: 500 }} />;
}

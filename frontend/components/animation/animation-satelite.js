import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "../../public/animation-satelite.json";

export default function AnimationSatelite() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      //   style={{ width: 500, height: 500 }}
    />
  );
}

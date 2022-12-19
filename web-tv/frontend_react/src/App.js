import { useState } from "react";

import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";
import imgGuguVr from "./gugu_vr.png";
import imgCave from "./vr_cave.jpg";
import imgOculus from "./vr_oculus.png";
import imgVivo from "./vr_vivo.png";

const prizes = [
  {
    image: imgCave,
  },
  {
    image: imgOculus,
  },
  {
    image: imgVivo,
  },
];

// const winPrizeIndex = 2;
// const winPrizeIndex = Math.floor(Math.random() * 4) + 2;

const reproductionArray = (array = [], length = 0) => [
  ...Array(length)
    .fill("_")
    .map(() => array[Math.floor(Math.random() * array.length)]),
];

const reproducedPrizeList = [
  ...prizes,
  ...reproductionArray(prizes, prizes.length * 3),
  ...prizes,
  ...reproductionArray(prizes, prizes.length),
];

const generateId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

const prizeList = reproducedPrizeList.map((prize) => ({
  ...prize,
  id: generateId(),
}));

const App = () => {
  const [start, setStart] = useState(false);
  const min = 0;
  const max = prizes.length;
  const [winPrizeIndex, setWinPrizeIndex] = useState(
    Math.floor(Math.random() * (max - min + 1)) + min
  );

  const handleWinPrizeIndex = () => {
    setWinPrizeIndex(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  const prizeIndex = prizes.length * 4 + winPrizeIndex;

  const handleStartRunRoullet = () => {
    handleWinPrizeIndex();
    setStart((prevState) => !prevState);
  };

  const handlePrizeDefined = () => {
    console.log(winPrizeIndex);
  };

  return (
    <>
      <RoulettePro
        spinningTime={3}
        prizes={prizeList}
        prizeIndex={prizeIndex}
        start={start}
        onPrizeDefined={handlePrizeDefined}
      />
      <div className="flex flex-row items-center justify-center py-20">
        <button onClick={handleStartRunRoullet}>
          <img src={imgGuguVr} width={100} />
        </button>
      </div>
    </>
  );
};

export default App;

import Image from "next/image";
import imgGugu from "../../public/gugu_glasses.png";
import imgOculus from "../../public/oculus-quest2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const text = [
    "안녕하세요. 저는 메타버스 구구입니다.",
    "지구 최강의 조류라고 할 수 있죠.",
    "오늘 안전교육을 담당할 조교입니다.",
    "문장 4",
    "문장 5",
  ];
  const [Timer, setTimer] = useState(1000);
  const [Index, setIndex] = useState(0);
  const [Hidden, setHidden] = useState(true);
  const [IsOculus, setIsOculus] = useState(false);

  const eventHandler = () => {
    if (Index < 5) {
      setTimeout(() => {
        setIndex(Index + 1);
        console.log(Index);
      }, 2000);
    }
  };

  useEffect(() => {
    eventHandler();
  }, [Index]);

  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="min-h-screen container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 0, 0],
                  // borderRadius: ["20%", "20%"],
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  times: [0.25, 0.25],
                  repeat: Infinity,
                  // repeatDelay: 1,
                }}
              >
                <Image
                  alt="hero"
                  src={IsOculus ? imgOculus : imgGugu}
                  priority
                />
                {/* <Image alt="hero" src={imgGugu} priority /> */}
              </motion.div>
            </div>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 0, 0],
                // borderRadius: ["20%", "20%"],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                times: [0.25, 0.25],
                repeat: Infinity,
                // repeatDelay: 1,
              }}
            >
              <h1 className="title-font text-2xl md:text-4xl lg:text-6xl  mb-4 py-10 font-bold text-gray-900">
                {text[Index]}
                {/* {Index} */}
              </h1>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

import Image from "next/image";
import imgGugu from "../../public/gugu_glasses.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  useEffect(() => {
    AOS.init();

    document.addEventListener("aos:in", ({ detail }) => {
      console.log("animated in", detail);
    });

    document.addEventListener("aos:out", ({ detail }) => {
      console.log("animated out", detail);
    });
  });

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
                <Image alt="hero" src={imgGugu} priority />
              </motion.div>
            </div>
            <div className="text-center lg:w-2/3 w-full py-10">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                안녕하세요. 저는 메타버스 구구입니다.
              </h1>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

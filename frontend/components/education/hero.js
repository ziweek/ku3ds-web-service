import Image from "next/image";
import imgGugu from "../../public/gugu.png";
import { motion, useScroll } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Gugu from "./gugu";

export default function Hero() {
  const { scrollY } = useScroll();
  const [text, setText] = useState("안녕 나는 구구.");
  setTimeout(() => {
    setText("밥먹자 구구구");
  }, 3000);

  useEffect(() => {
    // const screenHeight = window.innerHeight * -1;
    AOS.init({
      // offset: screenHeight * (2 / 5),
      once: false,
    });
  });

  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log("Page scroll: ", latest);
    });
  }, []);

  return (
    <>
      <section className="text-gray-500 body-font">
        <div className="min-h-screen bg-white container mx-auto flex px-5 py-40 items-center justify-center flex-col">
          <div data-aos="fade-up" data-aos-delay="500">
            <Gugu />
            {/* <Image src={imgGugu} height={200} alt="tiger" /> */}
          </div>

          <br />
          <br />
          <div className="text-center lg:w-2/3 w-full">
            <motion.div>
              <h1 className="text-black font-pak title-font sm:text-4xl text-3xl mb-4 font-medium">
                {text}
              </h1>
            </motion.div>
            {/* <div data-aos="fade-in" data-aos-duration="1500">
              <p className="text-black  mb-8 leading-relaxed">
                파이빌에서 평화로운 나날을 보내던 호이와 구구는 어느 날 ‘우리를
                찾아보라’는 쪽지를 남기고 사라졌습니다. ku-3ds 문 앞에서
                기웃거리던 귀여운 모습이 눈에 선하네요. 메타버스 세계로 떠났다는
                소문만 무성하고 행방은 묘연합니다.
              </p>
            </div> */}
            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}

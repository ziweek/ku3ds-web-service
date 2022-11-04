import Image from "next/image";
import imgGugu from "../../public/gugu.png";
import { motion, useScroll } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Gugu() {
  const { scrollY } = useScroll();
  console.log("맞나");
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("");

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
      setCurrent(latest);
      console.log("current scroll: ", current);
    });
  }, [current]);

  return (
    <>
      <section className="text-gray-500 body-font">
        <div className="min-h-screen bg-white container mx-auto flex px-5 py-40 items-center justify-center flex-col">
          <div data-aos="fade-in" data-aos-delay="500">
            <Image src={imgGugu} height={200} alt="tiger" />
          </div>
        </div>
      </section>
    </>
  );
}

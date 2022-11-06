import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AnimationCircle from "../components/animation/animation-circle";
import ImgTitle from "../public/title.png";
import Canvas from "../components/front/canvas";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useRouter } from "next/router";

export default function Main() {
  const router = useRouter();
  const [IsVisible, setIsVisible] = useState(false);
  const [IsClicked, setIsClicked] = useState(false);
  const [DoBoost, setDoBoost] = useState(false);

  useEffect(() => {
    // console.log("useEffect");
    if (IsVisible == false) {
      setTimeout(async () => {
        await setIsVisible(true);
      }, 2000);
    }
  }, []);

  const clickHandler = async () => {
    await setIsClicked(!IsClicked);
    setTimeout(async () => {
      await setDoBoost(true);
    }, 500);
    setTimeout(async () => {
      await router.push("/home", undefined, { shallow: true });
    }, 2000);
  };

  return (
    <div>
      <Head>
        <title>KU-3DS</title>
        <meta name="KU-3DS" content="Generated by KU-3DS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black min-h-screen flex">
        <div className="relative container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
          <div className="fixed flex" style={{ width: "100%", height: "100%" }}>
            {/* <motion.div animate={IsVisible ? { opacity: 1 } : { opacity: 0 }}> */}
            <Canvas DoBoost={DoBoost} minSpeed={10} maxSpeed={30} />
            {/* </motion.div> */}
          </div>
          <div className="absolute z-10 flex items-center justify-center">
            <button onClick={clickHandler}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={IsVisible ? { opacity: 1 } : { opacity: 0 }}
              >
                <motion.div
                  animate={IsClicked ? { scale: [0.5, 1.2, 0] } : { scale: 1 }}
                  transition={{}}
                >
                  <Image src={ImgTitle} alt="title" priority />
                </motion.div>
              </motion.div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

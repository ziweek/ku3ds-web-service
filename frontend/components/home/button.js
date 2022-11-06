import AnimationButton from "../animation/animation-button";
import AnimationUpper from "../animation/animation-upper";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function LaunchButton() {
  const router = useRouter();
  const [IsPulled, setIsPulled] = useState(false);

  const clickHandler = async () => {
    await setIsPulled(true);
    setTimeout(async () => {
      await router.push("/planet", undefined, { shallow: true });
    }, 500);
  };

  useEffect(() => {}, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="bg-primary container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <div data-aos="fade-in">
              <p className="text-lg text-white leading-relaxed">
                아래 버튼을 눌러서 호이 찾으러 가기
              </p>
            </div>
            <div
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="200"
              className="flex justify-center"
            >
              <AnimationUpper />
            </div>
            <div
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="800"
              className="flex justify-center"
            >
              <button onClick={clickHandler}>
                <motion.div
                  animate={IsPulled ? { scale: [0.5, 1.2, 0] } : { scale: 1 }}
                >
                  <AnimationButton />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import imgGugu from "../../public/gugu_glasses.png";
import imgOculus from "../../public/oculus-quest2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

export default function Hero() {
  const imgControls = useAnimationControls();
  const textControls = useAnimationControls();

  const text = [
    "...",
    "안녕! 나는 구구.",
    "지구 최강의 비둘기라고 할 수 있지.",
    "그리고 신입교육을 담당하고 있다.",
    "그럼 다들 잘 부탁한다구구.",
    "일단, 우리 여행장비를 살펴볼까?",
    "...",
    "이건 오큘러스 퀘스트2라고 한다.",
    "이걸 사용해서 메타버스 세계로 들어갈 수 있지.",
    "...",
    "이제 사용법을 알아보자!",
    "우선 오른손",
    "다음으로 왼손",
    "머리에 쓰는 것",
    "...",
    "......",
    ".........",
    "메타버스 수료한 것을 축하한다...",
    ".........",
  ];
  const [Timer, setTimer] = useState(1000);
  const [Index, setIndex] = useState(0);
  const [IsOculus, setIsOculus] = useState(false);
  const [IsImgAction, setIsImgAction] = useState(false);
  const [IsTextAction, setIsTextAction] = useState(false);

  const eventHandler = async () => {
    console.log(Index);
    console.log(IsOculus);
    console.log(IsImgAction);
    console.log(IsTextAction);
    if (Index <= text.length) {
      await setTimeout(() => {
        setIsTextAction(true);
        if (Index == 5) {
          setIsOculus(true);
          setIsImgAction(true);
        }
        setIndex(Index + 1);
      }, 1000);
    } else {
    }
  };

  const finishEventHandler = async () => {
    await setIsTextAction(false);
    await setIsImgAction(false);
  };

  useEffect(() => {
    eventHandler();
    imgControls.start(IsImgAction ? { opacity: [0, 1] } : { opacity: 1 });
    textControls.start(IsTextAction ? { opacity: [0, 1] } : { opacity: 1 });
    finishEventHandler();
  }, [Index, IsOculus]);

  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="min-h-screen container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className={"w-1/3 mb-10 object-cover object-center rounded"}>
              <motion.div animate={imgControls}>
                <Image
                  alt="hero"
                  src={IsOculus ? imgOculus : imgGugu}
                  priority
                />
              </motion.div>
            </div>
            <motion.div animate={textControls}>
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

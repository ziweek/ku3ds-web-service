import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AnimationChecked from "../../animations/animation-check";
import AnimationButton from "../../animations/animation-next";
import AnimationDone from "../../animations/animation-done";

export default function Hero() {
  const router = useRouter();
  const eventHandler = async () => {
    await router.push("/ending", undefined, { shallow: true });
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="text-black body-font">
        <div className="min-h-screen container mx-auto flex px-5 py-40 items-center justify-center flex-col">
          <div className="absolute justify-center flex flex-row py-10">
            <AnimationDone></AnimationDone>
          </div>
          <div className="justify-center flex flex-row py-10">
            <AnimationChecked></AnimationChecked>
          </div>
          <div data-aos="fade-in">
            <h1 className="font-pak title-font text-4xl mb-4 font-medium">
              본 교육자료의 내용을 모두 숙지하셨나요?
            </h1>
          </div>
          <br />
          <div className="text-center lg:w-2/3 w-full">
            <div data-aos="fade-in" data-aos-duration="1500">
              <p className="text-xl mb-8 leading-relaxed">
                네! 문제가 발생한다면, 가까운 테크서포터에게 도움을
                요청하겠습니다!
              </p>
            </div>
            <div
              data-aos="fade-in"
              data-aos-duration="3000"
              className="justify-center flex flex-row py-10"
            >
              <button onClick={eventHandler}>
                <AnimationButton></AnimationButton>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

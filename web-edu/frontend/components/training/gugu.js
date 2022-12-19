import Image from "next/image";
import ImageGuguVr from "../../public/images/gugu_vr.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AnimationButton from "../../animations/animation-next";
import { useRouter } from "next/router";

export default function Gugu() {
  const router = useRouter();
  const eventHandler = async () => {
    await router.push("/training", undefined, { shallow: true });
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="text-black body-font">
        <div className="min-h-screen container mx-auto flex px-5 py-40 items-center justify-center flex-col">
          <div data-aos="fade-in">
            <Image src={ImageGuguVr} height={300} alt="tiger" priority />
          </div>
          <br />
          <br />
          <br />
          <div data-aos="fade-in">
            <h1 className="title-font text-4xl mb-4 font-medium">
              테크서포터즈의 지시사항에 귀 기울여 주세요!
            </h1>
          </div>
          <br />
          <div className="text-center lg:w-2/3 w-full">
            <div data-aos="fade-in" data-aos-duration="1500">
              <p className="text-2xl mb-8 leading-relaxed">
                그럼 호이를 찾으러 메타버스 세상으로 떠나보자구!
              </p>
            </div>
          </div>
          <div
            data-aos="fade-in"
            data-aos-duration="3000"
            className="flex flex-row py-10"
          >
            <button onClick={eventHandler}>
              <AnimationButton></AnimationButton>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

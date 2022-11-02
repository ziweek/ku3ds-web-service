import Image from "next/image";
import Link from "next/link";
import ImgRocket from "../../public/rocket.png";
import AnimationButton from "../animation/animation-button";
import AnimationUpper from "../animation/animation-upper";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ContentLaunch() {
  // console.log(screenHeight);

  useEffect(() => {
    const screenHeight = window.innerHeight * -1;
    AOS.init({
      // offset: screenHeight * (2 / 5),
      once: false,
    });
  });

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="bg-primary container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div data-aos="zoom-in-up">
            <Image src={ImgRocket} height={300} />
          </div>
          <br />
          <br />
          <div className="text-center lg:w-2/3 w-full">
            <div data-aos="fade-right">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                Microdosing synth tattooed vexillologist
              </h1>
            </div>
            <div data-aos="fade-in" data-aos-duration="1500">
              <p className="mb-8 leading-relaxed">
                백방으로 호이와 구구를 찾아다니던 테크서포터즈는 이제 여러분께
                도움을 요청합니다. 여행자분을 준비시켜드리는 지구별, 파이빌
                은하계로 떠나는 우주선, 빛나는 소리가 쏟아지는 토성, 두근두근
                레이싱코스가 펼쳐진 화성을 지나 파란만장한 모험을 겪으며
                발자취를 쫓다 보면 어느새 호이와 구구를 찾을 수 있을 거에요!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

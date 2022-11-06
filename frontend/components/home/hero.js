import Image from "next/image";
import ImgTiger from "../../public/hoi.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Hero() {
  return (
    <>
      <section className="text-gray-500 body-font">
        <div className="bg-primary container mx-auto flex px-5 py-40 items-center justify-center flex-col">
          <div data-aos="fade-up">
            <Image src={ImgTiger} height={200} alt="tiger" />
          </div>
          <br />
          <div data-aos="fade-up">
            <h1 className="font-pak title-font sm:text-4xl text-3xl mb-4 font-medium">
              이 호랑이를 찾습니다!
            </h1>
          </div>
          <div className="text-center lg:w-2/3 w-full">
            <div data-aos="fade-in" data-aos-duration="1500">
              <p className="mb-8 leading-relaxed">
                파이빌에서 평화로운 나날을 보내던 어느 날, 호이가 KU-3DS
                Metaverse에 놀러왔어요. 그런데, 잠시 한 눈을 판 사이에 VR 체험을
                하고 있던 호이가 사라져버렸습니다! 그리고, 호이가 있던 공존 책상
                위에는 쪽지 하나만이 남겨져 있었습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import ImgTiger from "../../public/hoi.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Hoi() {
  return (
    <>
      <section className="text-gray-500 body-font">
        <div className="bg-primary container mx-auto flex px-5  items-center justify-center flex-col">
          {/* <div data-aos="fade-in" className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="font-pak sm:text-3xl text-4xl font-medium title-font mb-2">
              스토리 소개
            </h1>
            <div className="h-1 w-40 bg-indigo-500 rounded"></div> */}
          {/* </div> */}
          <div data-aos="fade-up" className="">
            <Image src={ImgTiger} height={200} alt="tiger" />
          </div>
          <br />
          <div data-aos="fade-in">
            <h1 className="font-pak title-font sm:text-4xl text-3xl mb-4 font-medium">
              이 호랑이를 찾습니다!
            </h1>
          </div>
          <div className="text-center lg:w-2/3 w-full">
            <div data-aos="fade-in" data-aos-duration="1500">
              <p className="font-hsb mb-8 leading-relaxed">
                {/* 평화롭던 어느 날, 호이가 KU-3DS Metaverse 세상에 놀러왔어요.
                그런데, 잠시 한 눈을 판 사이에 호이가 사라져버렸습니다! */}
                KU-3DS에 놀러온 호이,
                <br />
                VR 체험을 하던 중 갑자기 사라져버렸다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

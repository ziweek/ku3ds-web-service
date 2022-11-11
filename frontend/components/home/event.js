import Image from "next/image";
import ImgRocket from "../../public/rocket.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Event() {
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
          <div data-aos="fade-up-right">
            <Image
              className="rotate-45"
              src={ImgRocket}
              height={300}
              alt="tiger"
            />
          </div>
          <br />
          <div data-aos="fade-in">
            <h1 className="font-pak title-font sm:text-4xl text-3xl mb-4 font-medium">
              얘들아, 기다리고 있을게!
            </h1>
          </div>
          <div className="text-center lg:w-2/3 w-full">
            <div data-aos="fade-in" data-aos-duration="1500">
              <p className="mb-8 leading-relaxed">
                고려대학교 파이필 1층 & 2층
                <br />
                11월 17일 14시부터 20시까지
                <br />
                11월 18일 14시부터 20시까지
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import ImgTiger from "../../public/gugu_glasses.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Vr() {
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
              안녕, 나는 구구!
            </h1>
          </div>

          <div className="text-center lg:w-2/3 w-full">
            <div data-aos="fade-in" data-aos-duration="1500">
              <p className="mb-8 leading-relaxed">
                여기 오큘러스 퀘스트를 쓰면 너희도 메타버스 세계로 접속할 수
                있어. 지금 바로 이 오큘러스 퀘스트로 우주에 접속해 호이를
                찾아줘!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

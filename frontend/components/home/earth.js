import Image from "next/image";
import ImgGuguGlasses from "../../public/gugu_glasses.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Gugu() {
  return (
    <>
      <section className="text-gray-500 body-font">
        <div className="bg-primary container mx-auto flex px-5 py-40 items-center justify-center flex-col">
          <p>{AOS.offset}</p>
          <div data-aos="fade-up">
            <Image src={ImgGuguGlasses} height={200} alt="ImgGuguGlasses" />
          </div>

          <br />
          <br />
          <div className="text-center lg:w-2/3 w-full">
            <div data-aos="fade-in">
              <h1 className="font-pak title-font sm:text-4xl text-3xl mb-4 font-medium">
                메타버스에서 호이를 찾아줘!
              </h1>
            </div>
            <div data-aos="fade-in" data-aos-duration="1500">
              <p className="mb-8 leading-relaxed">
                아무래도 호이가 오큘러스 퀘스트로 우주에 접속한 것 같아. 너희가
                호이를 찾아서 데려와줘!
              </p>
            </div>

            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}

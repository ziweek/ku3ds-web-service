import Image from "next/image";
import ImgTiger from "../../public/gugu_glasses.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    // const screenHeight = window.innerHeight * -1;
    AOS.init({
      // offset: screenHeight * (2 / 5),
      once: false,
    });
  });

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
                아무래도 호이가 오큘러스 퀘스트로 우주에 접속한 것 같아 나는
                내일 있을 행사 준비 때문에 여기 남아야 해서 호이를 찾으러 갈 수
                없어. 너희가 호이를 찾아서 데려와줘! 구구가 너희를 도와줄거야!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import ImgTitle from "../../public/title.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Memo() {
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
            <Image src={ImgTitle} height={200} alt="title" />
          </div>

          <br />
          <br />
          <div className="text-center lg:w-2/3 w-full">
            <div data-aos="fade-up">
              <p className="mb-8 leading-relaxed">
                “VR 속에는 재밌는게 정말 많은 것 같아.
                <br />
                나랑 숨바꼭질 하자!
                <br />
                나를 찾아봐, 우주에서 기다릴게!”
                <br />
                <br />「 호이 」
              </p>
            </div>
            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}

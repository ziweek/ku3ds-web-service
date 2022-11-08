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
                그리고,
                <br />
                쪽지 하나가 남겨져 있었습니다.
              </p>
            </div>
            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}

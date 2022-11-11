import Image from "next/image";
import ImgMemo from "../../public/memo.png";
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
            <Image src={ImgMemo} height={600} alt="ImgMemo" />
          </div>
          <div className="text-center lg:w-2/3 w-full">
            <div data-aos="fade-in">
              <p className="font-hsb mb-8 leading-relaxed">
                그리고, 책상 위에
                <br />
                쪽지만 하나 남아있다.
              </p>
            </div>
            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}

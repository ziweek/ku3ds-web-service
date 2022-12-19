import Image from "next/image";
import ImageOculus from "../../public/images/oculus.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Oculus() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="text-black body-font">
        <div className="min-h-screen container mx-auto flex px-5 py-40 items-center justify-center flex-col">
          <div data-aos="fade-in">
            <Image src={ImageOculus} height={450} alt="tiger" priority />
          </div>
          <div data-aos="fade-in">
            <h1 className="title-font text-4xl mb-4 font-medium">
              본 체험행사에서 사용되는 VR장비는 Oculus Quest2 입니다.
            </h1>
          </div>
          <br />
          <div className="text-center lg:w-2/3 w-full">
            {/* <div data-aos="fade-in" data-aos-duration="1500">
              <p className="text-2xl mb-8 leading-relaxed">
                반드시 본 교육의 내용을 숙지하고 VR장비를 사용해주시길 바랍니다.
              </p>
            </div> */}
          </div>
          {/* <div
            data-aos="fade-in"
            data-aos-duration="3000"
            className="flex flex-row py-10"
          >
            <button onClick={eventHandler}>
              <AnimationButton></AnimationButton>
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
}

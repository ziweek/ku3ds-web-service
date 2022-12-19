import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="text-black body-font">
        <div className="min-h-screen container mx-auto flex px-5 py-40 items-center justify-center flex-col">
          <br />
          <br />
          <br />
          <br />
          <div data-aos="fade-in">
            <h1 className="title-font text-4xl mb-4 font-medium">
              본 교육에서는 VR장비 사용방법 및 주의사항을 안내합니다.
            </h1>
          </div>
          <br />
          <div className="text-center lg:w-2/3 w-full">
            <div data-aos="fade-in" data-aos-duration="1500">
              <p className="text-2xl mb-8 leading-relaxed">
                반드시 본 교육의 내용을 정확하게 숙지한 이후에
                <br />
                VR장비를 사용해주시길 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

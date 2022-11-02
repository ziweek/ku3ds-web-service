import Image from "next/image";
import Link from "next/link";
import ImgRocket from "../../public/rocket.png";
import AnimationButton from "../animation/animation-button";
import AnimationUpper from "../animation/animation-upper";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function LaunchButton() {
  useEffect(() => {
    const screenHeight = window.innerHeight * -1;
    AOS.init({
      once: false,
    });
  });

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="bg-primary container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <div data-aos="fade-in">
              <p className="text-lg text-white leading-relaxed">
                버튼을 눌러서 찾으러 가기
              </p>
            </div>
            <div data-aos="fade-in" className="flex justify-center">
              <AnimationUpper />
            </div>
            <div data-aos="fade-in" className="flex justify-center">
              <Link href="/planet">
                <AnimationButton />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

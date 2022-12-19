import Image from "next/image";
import ImageGuguglasses from "../../public/images/gugu_glasses.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AnimationButton from "../../animations/animation-next";
import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();
  const eventHandler = async () => {
    await router.push("/training", undefined, { shallow: true });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="text-black body-font">
        <div className="min-h-full container mx-auto flex px-5 py-40 items-center justify-center flex-col">
          <div data-aos="fade-in">
            <Image src={ImageGuguglasses} height={250} alt="tiger" priority />
          </div>
          <br />
          <br />
          <div data-aos="fade-in">
            <h1 className="title-font text-4xl mb-4 font-medium">
              지금부터 나랑 훈련을 시작한닷!!
            </h1>
          </div>
          <br />
          <div className="text-center lg:w-2/3 w-full">
            <div data-aos="fade-in" data-aos-duration="2000">
              <p className="text-3xl leading-relaxed">
                어이, 각오는 되어 있지?
              </p>
            </div>
          </div>
          <div
            data-aos="fade-in"
            data-aos-duration="3000"
            className="flex flex-row py-10"
          >
            <button onClick={eventHandler}>
              <AnimationButton></AnimationButton>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

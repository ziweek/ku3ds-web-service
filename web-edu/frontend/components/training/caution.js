import Image from "next/image";
import ImageOculusLight from "../../public/images/oculus_light.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import AnimationButton from "../../animations/animation-next";

export default function Caution() {
  const router = useRouter();
  const eventHandler = async () => {
    await router.push("/ending", undefined, { shallow: true });
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="text-black body-font">
        <div className="min-h-screen container mx-auto flex px-5 py-40 items-center justify-center flex-col">
          <div data-aos="fade-in">
            <Image src={ImageOculusLight} height={500} alt="tiger" priority />
          </div>
          <div data-aos="fade-in">
            <h1 className="title-font text-4xl mb-4 font-medium text-center">
              VR장비는 사용시 다음과 같은 문제가 발생한다면,
              <br />
              주변에 있는 테크서포터즈에게 알려주세요.
            </h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="text-center w-full">
            <div data-aos="fade-in" data-aos-duration="1500">
              <p className="text-2xl mb-8 leading-relaxed">
                1. 이용자의 움직임과 시각 정보의 차이로 인해,
                <br />
                일시적인 어지러움 또는 두통 증상이 발생할 수도 있습니다.
              </p>
            </div>
            <br />
            <br />
            <div data-aos="fade-in" data-aos-duration="2000">
              <p className="text-2xl mb-8 leading-relaxed">
                2. 강한 빛, 선명하고 대비적인 화면, 빠르고 자극적인 시각 효과에
                장시간 노출될 경우,
                <br />
                뇌전증(간질)을 유발할 수도 있습니다.
              </p>
            </div>
            <br />
            <br />
            <div data-aos="fade-in" data-aos-duration="2500">
              <p className="text-2xl mb-8 leading-relaxed">
                3. VR 기기를 착용하면 시야가 현격하게 제한될 수 있으며,
                <br />이 경우 주변에 위치한 사물에 의해 부상의 위험이 있을 수도
                있습니다.
              </p>
            </div>
            <br />
            <br />
          </div>
        </div>
      </section>
    </>
  );
}

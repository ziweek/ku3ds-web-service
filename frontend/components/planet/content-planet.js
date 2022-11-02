import AnimationMar from "../animation/animation-planet-mar";
import AnimationMoon from "../animation/animation-planet-moon";
import AnimationSaturn from "../animation/animation-planet-saturn";
import AnimationNeptune from "../animation/animation-planet-neptune";
import AnimationEarth from "../animation/animation-planet-earth";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ContentPlanet() {
  useEffect(() => {
    const screenHeight = window.innerHeight * -1;
    AOS.init({
      // offset: screenHeight * (2 / 5),
      once: false,
    });
  });

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="bg-primary container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <div data-aos="fade-in" data-aos-duration="800">
              <p className="lg:w-1/2 w-full leading-relaxed">
                이제 여러분은 파이빌 은하계로 떠나는 우주선에 탑승하셨습니다.
                순조롭게 지구 밖으로 날아오릅니다. 가속도로 인한 압박이 가시고
                눈을 떠보니 펼쳐진 놀라운 광경! 창문 밖으로 펼쳐질 아름다운
                우주를 마음껏 눈에 담아주세요!
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div data-aos="fade-in" className="xl:w-1/5 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div data-aos="fade-in">
                  <AnimationEarth />
                </div>
                {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"> */}
                <h3 className="font-pak tracking-widest text-indigo-500 text-lg font-medium title-font">
                  안내부스
                </h3>
                <h2 className="font-pak text-2xl font-medium title-font mb-4">
                  지구별
                </h2>
                <p className="leading-relaxed text-base">
                  숨어버린 호이와 구구를 찾으러 떠나시는 여러분께 상황을
                  설명해드리고, 가상현실로 떠나는 우주선에 무사히 탑승하실 수
                  있도록 도와드립니다! 앞으로 펼쳐질 여정이 위험하지 않도록
                  주의사항에 귀를 기울여주세요
                </p>
              </div>
            </div>
            <div data-aos="fade-in" className="xl:w-1/5 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div data-aos="zoom-in-up" data-aos-duration="800">
                  <AnimationSaturn />
                </div>
                {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"> */}
                <h3 className="font-pak tracking-widest text-indigo-500 text-lg font-medium title-font">
                  비트세이버
                </h3>
                <h2 className="font-pak text-2xl font-medium title-font mb-4">
                  토성
                </h2>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <p className="leading-relaxed text-base">
                    토성에 착륙한 여러분은 난관에 부딪힙니다. 리듬과 함께 내리는
                    별 때문에 착륙한 자리에서 움직일 수가 없습니다. 리듬에 맞춰
                    재빨리 광선검으로 별을 갈라서 안전한 곳으로 이동해주세요!
                    무사히 이동하신 분들을 위한 상품도 준비되어있어요!
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-in" className="xl:w-1/5 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div data-aos="zoom-in-up" data-aos-duration="800">
                  <AnimationMar />
                </div>
                {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"> */}
                <h3 className="tracking-widest text-indigo-500 text-lg font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg font-medium title-font mb-4">
                  Colosseum Roma
                </h2>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <p className="leading-relaxed text-base">
                    토성에 착륙한 여러분은 난관에 부딪힙니다. 리듬과 함께 내리는
                    별 때문에 착륙한 자리에서 움직일 수가 없습니다. 리듬에 맞춰
                    재빨리 광선검으로 별을 갈라서 안전한 곳으로 이동해주세요!
                    무사히 이동하신 분들을 위한 상품도 준비되어있어요!
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-in" className="xl:w-1/5 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div data-aos="zoom-in-up" data-aos-duration="800">
                  <AnimationMoon />
                </div>

                {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"> */}
                <h3 className="tracking-widest text-indigo-500 text-lg font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg font-medium title-font mb-4">
                  Great Pyramid of Giza
                </h2>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <p className="leading-relaxed text-base">
                    토성에 착륙한 여러분은 난관에 부딪힙니다. 리듬과 함께 내리는
                    별 때문에 착륙한 자리에서 움직일 수가 없습니다. 리듬에 맞춰
                    재빨리 광선검으로 별을 갈라서 안전한 곳으로 이동해주세요!
                    무사히 이동하신 분들을 위한 상품도 준비되어있어요!
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-in" className="xl:w-1/5 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div data-aos="zoom-in-up" data-aos-duration="800">
                  <AnimationNeptune />
                </div>
                {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"> */}
                <h3 className="tracking-widest text-indigo-500 text-lg font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg font-medium title-font mb-4">
                  San Francisco
                </h2>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <p className="leading-relaxed text-base">
                    토성에 착륙한 여러분은 난관에 부딪힙니다. 리듬과 함께 내리는
                    별 때문에 착륙한 자리에서 움직일 수가 없습니다. 리듬에 맞춰
                    재빨리 광선검으로 별을 갈라서 안전한 곳으로 이동해주세요!
                    무사히 이동하신 분들을 위한 상품도 준비되어있어요!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

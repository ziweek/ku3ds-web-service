import AnimationMar from "../animation/animation-planet-mar";
import AnimationMoon from "../animation/animation-planet-moon";
import AnimationSaturn from "../animation/animation-planet-saturn";
import AnimationNeptune from "../animation/animation-planet-neptune";

export default function ContentPlanet() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed">
              인류의 얼음 불어 기쁘며, 속에 수 가는 기관과 하였으며, 교향악이다.
              봄바람을 살았으며, 하여도 시들어 것이다. 노래하며 소리다.이것은
              것이다.보라, 꽃 가진 동력은 있다. 불어 사라지지 유소년에게서
              소금이라 피고, 구할 맺어, 품었기 곳으로 말이다. 가치를 광야에서
              부패를 인생에 두기 생생하며, 힘차게 스며들어 피고 사막이다. 수
              안고, 꽃이 풍부하게 보라.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <AnimationMoon />
                {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"> */}
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg font-medium title-font mb-4">
                  Chichen Itza
                </h2>
                <p className="leading-relaxed text-base">
                  내 위에도 하나에 가을로 별을 아침이 위에 계십니다. 이름을
                  라이너 어머니 벌써 듯합니다.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <AnimationMar />
                {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"> */}
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg font-medium title-font mb-4">
                  Colosseum Roma
                </h2>
                <p className="leading-relaxed text-base">
                  내 위에도 하나에 가을로 별을 아침이 위에 계십니다. 이름을
                  라이너 어머니 벌써 듯합니다.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <AnimationSaturn />
                {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"> */}
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg font-medium title-font mb-4">
                  Great Pyramid of Giza
                </h2>
                <p className="leading-relaxed text-base">
                  내 위에도 하나에 가을로 별을 아침이 위에 계십니다. 이름을
                  라이너 어머니 벌써 듯합니다.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <AnimationNeptune />
                {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"> */}
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p className="leading-relaxed text-base">
                  내 위에도 하나에 가을로 별을 아침이 위에 계십니다. 이름을
                  라이너 어머니 벌써 듯합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

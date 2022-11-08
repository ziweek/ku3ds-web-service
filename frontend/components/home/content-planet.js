import AnimationMar from "../animation/animation-planet-mar";
import AnimationMoon from "../animation/animation-planet-moon";
import AnimationSaturn from "../animation/animation-planet-saturn";
import AnimationNeptune from "../animation/animation-planet-neptune";
import AnimationEarth from "../animation/animation-planet-earth";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ContentPlanet() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="bg-primary container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div data-aos="fade-in" className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="font-pak sm:text-3xl text-4xl font-medium title-font mb-2">
                체험부스 소개
              </h1>
              <div className="h-1 w-40 bg-indigo-500 rounded"></div>
            </div>
            <div data-aos="fade-in" data-aos-duration="800">
              <p className="lg:w-1/2 w-full leading-relaxed">
                &nbsp;&nbsp;이제 여러분은 메타버스 은하계로 떠나는 VR 우주선에
                탑승하셨습니다. 순조롭게 지구 밖으로 날아오릅니다. 가속도로 인한
                압박이 가시고 눈을 떠보니 펼쳐진 놀라운 광경! 창문 밖으로 펼쳐질
                아름다운 우주를 마음껏 눈에 담아주세요!
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div data-aos="fade-in" className="xl:w-1/5 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div data-aos="zoom-in-up">
                  <AnimationEarth />
                </div>
                <br />
                <h2 className="font-pak text-2xl font-medium title-font mb-4">
                  네모네모 지구별
                </h2>
                <h3 className="font-pak tracking-widest text-indigo-400 text-lg font-medium title-font">
                  안내 및 상품 수령 부스
                </h3>
                <p className="leading-relaxed text-base">
                  &nbsp;&nbsp;숨어버린 호이를 찾기 위해 떠나시는 여러분께 간단한
                  안내를 해드리고, 호이를 찾기 위한 지도가 있는 팜플렛과 참가자
                  전원에게 증명하는 기념품을 나눠드립니다. 앞으로 펼쳐질 여정이
                  위험하지 않도록 주의사항에도 귀를 기울여주세요.
                </p>
                <br />
                <h3 className="font-pak tracking-widest text-indigo-400 text-lg font-medium title-font">
                  EVENT
                </h3>
                <p className="leading-relaxed text-base">
                  - 나눠드린 팜플렛에 스티커를 5개 이상 받아 무사히 다시 지구로
                  돌아오시면 선착순으로 선물을 드립니다!
                </p>
              </div>
            </div>
            <div data-aos="fade-in" className="xl:w-1/5 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div data-aos="zoom-in-up" data-aos-duration="800">
                  <AnimationMoon />
                </div>
                <br />
                <h2 className="font-pak text-2xl font-medium title-font mb-4">
                  블링블링 달
                </h2>
                <h3 className="font-pak tracking-widest text-indigo-400 text-lg font-medium title-font">
                  포토존 부스
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <p className="leading-relaxed text-base">
                    &nbsp;&nbsp;호이를 무사히 찾아주셨군요! 오늘 파이빌 은하계를
                    돌며 호이를 찾아주신 여러분들을 위해 기념 촬영을
                    준비했습니다. 메타버스 세계에 접속했던 오늘의 추억을
                    사진으로 남겨보세요!
                  </p>
                  <br />
                  <h3 className="font-pak tracking-widest text-indigo-400 text-lg font-medium title-font">
                    EVENT
                  </h3>
                  <p className="leading-relaxed text-base">
                    - 오늘 체험에서 즐거웠던 활동 or 재밌었던 장면을 인스타그램
                    스토리에 @ku_3ds를 태그해서 올려주시면 폴라로이드 사진을
                    촬영해드립니다!
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-in" className="xl:w-1/5 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div data-aos="zoom-in-up" data-aos-duration="800">
                  <AnimationMar />
                </div>
                <br />
                <h2 className="font-pak text-2xl font-medium title-font mb-4">
                  콩닥콩닥 화성별
                </h2>
                <h3 className="font-pak tracking-widest text-indigo-400 text-lg font-medium title-font">
                  공포게임 체험부스 - Dont let go
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <p className="leading-relaxed text-base">
                    &nbsp;&nbsp;다음으로 도착한 행성은 화성입니다. 화성은
                    어두컴컴하고 금방이라도 뭔가 튀어나올 것만 같아요. 어라?
                    구구가 저 멀리서 무언가를 발견한 것 같습니다! 저쪽으로
                    가려면 이 길을 지나야 하는데, 과연 무사히 구구에게 다가갈 수
                    있을까요?
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-in" className="xl:w-1/5 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div data-aos="zoom-in-up" data-aos-duration="800">
                  <AnimationSaturn />
                </div>
                <br />
                <h2 className="font-pak text-2xl font-medium title-font mb-4">
                  삐용삐용 목성별
                </h2>
                <h3 className="font-pak tracking-widest text-indigo-400 text-lg font-medium title-font">
                  리듬게임 체험부스 - 비트세이버
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <p className="leading-relaxed text-base">
                    &nbsp;&nbsp;목성에 착륙한 여러분은 난관에 부딪힙니다. 리듬과
                    함께 쏟아지는 별 때문에 착륙한 자리에서 움직일 수가
                    없습니다. 리듬에 맞춰 재빨리 광선검으로 별을 갈라서 안전한
                    곳으로 이동해주세요! 무사히 이동하신 분들을 위한 상품도
                    준비되어 있어요!
                  </p>
                  <br />
                  <h3 className="font-pak tracking-widest text-indigo-400 text-lg font-medium title-font">
                    EVENT
                  </h3>
                  <p className="leading-relaxed text-base">
                    - 1층 & 2층의 비트세이버 부스에서 점수 챌린지에 도전하시면
                    점수 상위 8분에게 상품을 드립니다!
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-in" className="xl:w-1/5 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div data-aos="zoom-in-up" data-aos-duration="800">
                  <AnimationNeptune />
                </div>
                <br />
                <h2 className="font-pak text-2xl font-medium title-font mb-4">
                  빵야빵야 해왕성
                </h2>
                <h3 className="font-pak tracking-widest text-indigo-400 text-lg font-medium title-font">
                  액션게임 체험부스 - Pistol Whip
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <p className="leading-relaxed text-base">
                    &nbsp;&nbsp;이제 여러분은 토성에 도착했습니다. 앗! 저기
                    호이가 있는 것 같아요. 그런데 누군가에게 쫓기고 있는 것
                    같습니다. 우리가 가서 도와줘야겠어요. 어서 이 총을 받아
                    적들을 물리쳐주세요! 배경 음악에 맞춰 쏘면 더 높은 점수를
                    받을 수 있답니다.
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

import Image from "next/image";
import ImgTiger from "../../public/tiger.jpeg";

export default function Hero() {
  return (
    <>
      <section className="text-gray-500 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image src={ImgTiger} height={200} />
          <br />
          <br />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="font-pak title-font sm:text-4xl text-3xl mb-4 font-medium">
              혹시 이 호랑이를 본 적이 있나요?
            </h1>
            <p className="mb-8 leading-relaxed">
              이런 오면 슬퍼하는 청춘이 지나고 있습니다. 한 이름과, 나는 쉬이
              많은 강아지, 아스라히 가을로 멀리 거외다. 시인의 소학교 멀리 딴은
              듯합니다. 다 덮어 아침이 봅니다. 프랑시스 나는 별 하나에 때
              있습니다. 비둘기, 못 남은 하나에 이런 북간도에 까닭입니다. 새워
              풀이 걱정도 하나에 까닭입니다.
            </p>
            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}

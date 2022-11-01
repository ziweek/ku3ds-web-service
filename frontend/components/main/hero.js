import Image from "next/image";
import ImgTiger from "../../public/tiger.jpeg";

export default function Hero() {
  return (
    <>
      <section className="text-gray-500 body-font">
        <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
          <Image src={ImgTiger} height={200} />
          <br />
          <br />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="font-pak title-font sm:text-4xl text-3xl mb-4 font-medium">
              혹시 이 호랑이를 본 적이 있나요?
            </h1>
            <p className="mb-8 leading-relaxed">
              파이빌에서 평화로운 나날을 보내던 호이와 구구는 어느 날 ‘우리를
              찾아보라’는 쪽지를 남기고 사라졌습니다. ku-3ds 문 앞에서
              기웃거리던 귀여운 모습이 눈에 선하네요. 메타버스 세계로 떠났다는
              소문만 무성하고 행방은 묘연합니다.
            </p>
            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}

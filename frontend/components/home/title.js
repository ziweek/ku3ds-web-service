import AOS from "aos";
import "aos/dist/aos.css";

export default function Title() {
  return (
    <>
      <section className="text-gray-500 body-font">
        <div className="bg-primary container mx-auto flex px-5 py-10 items-center justify-center flex-col">
          <div data-aos="fade-in" className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="font-pak sm:text-3xl text-4xl font-medium title-font mb-2">
              스토리 소개
            </h1>
            <div className="h-1 w-40 bg-indigo-500 rounded"></div>
          </div>
        </div>
      </section>
    </>
  );
}

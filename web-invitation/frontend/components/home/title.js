import AOS from "aos";
import "aos/dist/aos.css";

export default function Title(props) {
  return (
    <>
      <section className="text-gray-500 body-font">
        <div className="bg-primary container mx-auto flex px-5 py-10 items-center justify-center flex-col">
          <div data-aos="fade-in" className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="font-pak sm:text-3xl text-4xl font-medium title-font mb-2">
              {props.text}
            </h1>
            <div
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              className="h-1 w-60 bg-indigo-500 rounded"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}

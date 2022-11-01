import Image from "next/image";
import { useEffect, useState } from "react";
import ImgTitle from "../public/title.png";
import AnimationCircle from "./animation/animation-circle";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="scroll bg-primary text-gray-600 body-font">
        <div className="relative container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
          <div
            className="absolute flex items-center justify-center w-3/4"
            style={{ display: scrollY > 1 ? "none" : "block" }}
          >
            <AnimationCircle />
          </div>
          <div
            className="static z-10 flex items-center justify-center"
            style={{ height: scrollY > 1 ? 100 : 800 }}
          >
            <Image src={ImgTitle} style={{ width: scrollY > 1 ? 250 : 800 }} />
          </div>
        </div>
      </header>
    </>
  );
}

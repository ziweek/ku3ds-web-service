import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AnimationCircle from "../components/animation/animation-circle";
import ImgTitle from "../public/title.png";
import Canvas from "../components/front/canvas";

export default function Main() {
  return (
    <div>
      <Head>
        <title>KU-3DS</title>
        <meta name="KU-3DS" content="Generated by KU-3DS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black min-h-screen flex">
        <div className="relative container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
          <div className="fixed flex">
            <Canvas />
          </div>
          <div className="absolute flex items-center justify-center w-3/4">
            <AnimationCircle />
          </div>
          <div className="absolute z-10 flex items-center justify-center">
            <Link href="/home">
              <Image src={ImgTitle} style={{ width: 800 }} alt="title" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

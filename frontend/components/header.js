import Link from "next/link";
import Image from "next/image";
import Imglogo3ds from "../public/logo_3ds.png";

export default function Header() {
  return (
    <>
      <header className="scroll bg-gray-800 text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-space justify-between">
          <div className="flex">
            <Link href="/home">
              <button>
                <Image src={Imglogo3ds} alt="title" height={30} />
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

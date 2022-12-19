import Link from "next/link";
import Image from "next/image";
import Imglogo3ds from "../public/logo_3ds.png";

export default function Header() {
  return (
    <>
      <header className="scroll bg-black text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-space justify-between">
          <div className="flex">
            <Link href="/home">
              <button>
                <Image src={Imglogo3ds} alt="title" height={30} />
              </button>
            </Link>
          </div>
          <div className="flex">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="gray"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

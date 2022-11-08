import Image from "next/image";
import logo3DS from "../public/logo_3ds.png";
import logoKu from "../public/logo_ku.png";

export default function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 mx-auto"></div>
        <div className="bg-gray-800">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <div className="flex flex-row space-x-4">
              <Image src={logoKu} height={30} />
              <Image src={logo3DS} height={30} />
            </div>
            <p className="text-sm text-slate-300 sm:ml-6 sm:mt-0 mt-4">
              © 2022, All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

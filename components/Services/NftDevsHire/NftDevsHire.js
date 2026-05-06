import Link from "next/link";
import React from "react";

const NftDevsHire = () => {
  const data = {
    title: "NFT developers for hire",
    text: "ApexDv offers dedicated teams of highly skilled IT professionals and individual software engineers to work on your NFT development projects. Relying on our experience in blockchain, we build top-notch NFT solutions sticking to all the recent market and technology trends.",
  };
  return (
    <>
      <div className="bg-[url('/images/Service Page/image 502.svg')] bg-top bg-no-repeat bg-cover py-5">
        <div className="container p-5 flex flex-col justify-center items-center">
          <h1 className="font-teko font-normal text-[64px] leading-[63px] text-center text-white max-sm:text-[32px] max-sm:leading-10 sm:max-md:text-[40px]">
            {data.title}
          </h1>
          <p className="font-rubik font-normal text-base leading-7 text-center text-[#e9e9ea] mb-0">
            {data.text}
          </p>
          <button
            className="w-[232px] h-14 text-base bg-transparent border-none relative text-[#f0f0f0] cursor-pointer z-1 flex items-center justify-center whitespace-nowrap select-none mt-5 before:content-[''] before:absolute before:bottom-0 before:right-0 before:z-[-99999] before:transition-all before:duration-400 before:transform before:translate-x-0 before:translate-y-0 before:w-full before:h-full before:bg-[#1caf83] before:border before:border-[#1caf83] before:rounded-full after:content-[''] after:absolute after:bottom-0 after:right-0 after:z-[-99999] after:transition-all after:duration-400 after:transform after:translate-x-[10px] after:translate-y-[10px] after:w-[35px] after:h-[35px] after:bg-[linear-gradient(180deg,rgba(26,26,26,0.4)_0%,rgba(26,26,26,0.4)_100%)] after:backdrop-blur-[3px] after:rounded-full hover:before:transform hover:before:translate-x-[5%] hover:before:translate-y-[20%] hover:before:w-[110%] hover:before:h-[110%] hover:before:bg-[#1caf83] hover:after:transform hover:after:translate-x-0 hover:after:translate-y-0 hover:after:w-full hover:after:h-full hover:after:rounded-full hover:after:backdrop-blur-[6px] active:after:transition-none active:after:transform active:after:translate-y-[5%]"
            href="#contactUs">
            <Link href="#contactUs">
              <a
                role="button"
                href="#contactUs"
                className="text-white font-rubik hover:text-white">
                Contact Us
              </a>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NftDevsHire;

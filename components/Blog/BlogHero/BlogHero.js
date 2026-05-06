import React from "react";
import Link from "next/link";

const BlogHero = () => {
  const blogheroData = {
    title: "Read Our Blog",
    text: "Discover all the latest about our products, technology, and Google culture on our official blog.",
    btnText: "See our Openings",
    btnHref: "/",
    heroImage: "/images/Blog/image 456.svg",
  };

  const { title, text, btnText, heroImage, btnHref } = blogheroData;

  return (
    <div className="relative py-[100px] pb-[50px] md:py-[30px]">
      {/* Green shadow blur effect */}
      <div className="absolute right-0 top-[100px] w-[182px] max-w-full h-[133.35px] bg-[#1caf83] opacity-40 blur-[100px] -z-10 md:hidden"></div>
      
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="flex justify-end pr-[30px] md:justify-center md:pr-0 md:mb-[30px] xl:justify-start xl:pr-0">
            <img src={heroImage} alt="" className="w-auto max-md:w-full" />
          </div>

          <div className="max-md:text-center">
            <h1 className="font-teko text-[64px] leading-[63px] font-normal text-[#222429] max-md:text-[32px] max-md:leading-[42px]">{title}</h1>
            <p className="font-rubik text-lg leading-7 font-normal text-[#222429] my-5 pr-[150px] md:my-[20px] md:pr-0">{text}</p>
            <button className="group relative w-[100px] h-[30px] text-base bg-transparent border-none text-[#1caf83] cursor-pointer z-[1] px-[50px] py-2.5 flex items-center justify-center whitespace-nowrap select-none transition-all duration-400 
              before:content-[''] before:absolute before:bottom-0 before:right-0 before:-z-[99999] before:transition-all before:duration-400 before:w-full before:h-full before:bg-transparent before:border before:border-[#1caf83] before:rounded-[50px]
              after:content-[''] after:absolute after:bottom-0 after:right-0 after:-z-[99999] after:transition-all after:duration-400 after:w-[35px] after:h-[35px] after:rounded-[50px] after:bg-[#ffffff15] after:backdrop-blur-[3px]
              hover:before:translate-x-[5%] hover:before:translate-y-[20%] hover:before:w-[110%] hover:before:h-[110%] hover:before:bg-[#1caf83]
              hover:after:translate-x-0 hover:after:translate-y-0 hover:after:w-full hover:after:h-full hover:after:rounded-[50px] hover:after:backdrop-blur-[6px]
              active:after:transition-none active:after:translate-y-[5%]
              max-md:mx-auto" href={btnHref}>
              <Link className="text-[#1caf83] font-rubik group-hover:text-white" href="/contact">
                <a role="button">{btnText}</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;

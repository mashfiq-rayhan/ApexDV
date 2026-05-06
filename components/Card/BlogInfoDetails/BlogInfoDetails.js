import React from "react";
import Link from "next/link";

const BlogInfoDetails = ({
  title,
  subtitle,
  img,
  href,
  hoverHref,
  butText,
  hoverButText,
  text1,
  text2,
  text3,
  profileImg,
}) => {
  // console.log(title, subtitle, img, href , hoverHref, butText, hoverButText, text1, text2, text3, profileImg);
  return (
    <div className="mb-[50px] relative">
      <img src={img} alt="" className="w-full" />
      <h2 className="mt-5 font-teko text-[56px] font-normal leading-[60px] text-[#222429] pr-[120px] max-md:text-[32px] max-md:leading-10 max-md:pr-0">{title}</h2>
      <div className="flex gap-2.5 items-center my-5">
        <img src={profileImg} alt="" className="w-auto" />
        <h3 className="font-rubik text-sm font-normal leading-8 text-[#646669]">{subtitle}</h3>
      </div>
      <p className="mb-5 font-rubik text-base font-normal leading-7 text-[#4E5054] pr-[130px] max-md:pr-0">{text1}</p>
      <p className="mb-5 font-rubik text-base font-normal leading-7 text-[#4E5054] pr-[130px] max-md:pr-0">{text2}</p>
      <p className="mb-5 font-rubik text-base font-normal leading-7 text-[#4E5054] pr-[130px] max-md:pr-0">{text3}</p>
      <button className="group relative w-[100px] h-[30px] text-base bg-transparent border-none text-[#1caf83] cursor-pointer z-[1] px-[50px] py-2.5 flex items-center justify-center whitespace-nowrap select-none transition-all duration-400 
        before:content-[''] before:absolute before:bottom-0 before:right-0 before:-z-[99999] before:transition-all before:duration-400 before:w-full before:h-full before:bg-transparent before:border before:border-[#1caf83] before:rounded-[50px]
        after:content-[''] after:absolute after:bottom-0 after:right-0 after:-z-[99999] after:transition-all after:duration-400 after:w-[35px] after:h-[35px] after:rounded-[50px] after:bg-[#ffffff15] after:backdrop-blur-[3px]
        hover:before:translate-x-[5%] hover:before:translate-y-[20%] hover:before:w-[110%] hover:before:h-[110%] hover:before:bg-[#1caf83]
        hover:after:translate-x-0 hover:after:translate-y-0 hover:after:w-full hover:after:h-full hover:after:rounded-[50px] hover:after:backdrop-blur-[6px]
        active:after:transition-none active:after:translate-y-[5%]" href={hoverHref}>
        <Link className="text-[#1caf83] font-rubik group-hover:text-white" href="/contact">
          <a role="button">{hoverButText}</a>
        </Link>
      </button>
      <div>
        <button className="w-[120px] block py-[6px] px-[30px] gap-2.5 bg-[#F9A73E] border-none text-[#222429] font-rubik text-lg leading-7 font-normal transition-all duration-[0.4s] linear rounded-lg absolute top-5 right-5 hover:bg-[#1caf83] hover:text-white" href={href}>
          <Link className="" href="/contact">
            <a role="button">{butText}</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default BlogInfoDetails;

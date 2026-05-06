import React from "react";
import Link from "next/link";

const BlogFooter = () => {
  const nextDetailsHeader = {
    Logo: "/images/Blog/Group 3256.svg",
  };

  return (
    <div className="py-[60px] pb-[30px] bg-[#1CAF83]">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="font-rubik text-base leading-7 font-normal text-[#E9E9EA] pr-[170px] mb-5 md:pr-0 md:text-center md:mb-2.5 max-md:pr-0 max-md:text-center">
              ApexDv is a web & mobile app design and development company that
              is reinventing collaborative development with virtual teams.
              Working with passion and clarity, we partner with disruptive
              companies, providing support for decision making and developing
              systems that are true to the core ideas.
            </p>
            <h3 className="font-teko text-[32px] leading-10 font-normal text-[#E9E9EA] mb-5 md:text-center md:mb-2.5 max-md:text-center">Let's work together!</h3>

            <button className="w-[197px] block py-[14px] px-[30px] gap-2.5 bg-[#E9E9EA] border-none text-[#222429] font-rubik text-lg leading-7 font-normal transition-all duration-[0.4s] linear rounded-[35px] md:mx-auto max-md:mx-auto hover:bg-[#F9A73E] hover:text-black" href="/contact">
              <Link className="" href="/contact">
                <a role="button">Get an estimate</a>
              </Link>
            </button>
          </div>
          <div className="text-right md:text-center max-md:text-center">
            <h3 className="font-teko text-[32px] leading-10 font-normal text-[#E9E9EA] mb-5 md:mb-0 md:mt-2.5 max-md:mb-0 max-md:mt-5">We're hiring</h3>
            <h5 className="font-rubik text-base leading-7 font-normal text-[#E9E9EA]">Join the team that is reinventing how software is developed</h5>
            {/* <a href="">Check out our open positions!</a> */}
            <img src={nextDetailsHeader.Logo} alt="" className="w-auto ml-auto mt-[30px] mb-[30px] md:mx-auto md:mt-2.5 md:mb-2.5 max-md:mx-auto max-md:mt-5 max-md:mb-5" />
            <p className="font-rubik text-base leading-10 font-normal text-[#E9E9EA]">237 Kearny Street #9055</p>
            <p className="font-rubik text-base leading-10 font-normal text-[#E9E9EA]">San Francisco, CA 94108 • +1 415 691 6007</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFooter;

import Link from 'next/link';
import React from 'react';

const ViewDesign = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around relative">
      <div className="bg-[#1caf83] opacity-40 blur-[100px] absolute right-0 w-[182px] max-w-full h-[133.35px] z-[1]"></div>
      <div className="bg-[#1caf83] opacity-40 blur-[100px] absolute left-0 w-[182px] max-w-full h-[133.35px] z-[1]"></div>
      <div className="h-full">
        <img className="h-full lg:h-[736px] ml-0 lg:ml-25 p-10" alt="Hero" src={`/images/Portfolio Details AOTA/AotaWeb.svg`} />
      </div>
      <div className="mx-1.5 my-2.5 lg:mx-37.5 lg:my-50.5">
        <h2 className="font-teko font-normal">AOTA Responsive Design</h2>
        <h3 className="my-5">We're Brainging creative co-working to the Metaverse.</h3>
        <button className="w-[100px] h-[30px] text-base bg-transparent border-none relative text-[#1caf83] cursor-pointer z-[1] py-2.5 px-[30px] flex items-center justify-center whitespace-nowrap select-none touch-manipulation mt-[60px]\n          before:content-[''] before:absolute before:bottom-0 before:right-0 before:z-[-99999] before:transition-all before:duration-[0.4s] before:translate-x-0 before:translate-y-0 before:w-full before:h-full before:bg-transparent before:border before:border-[#1caf83] before:rounded-[50px]\n          after:content-[''] after:absolute after:bottom-0 after:right-0 after:z-[-99999] after:transition-all after:duration-[0.4s] after:translate-x-[10px] after:translate-y-[10px] after:w-[35px] after:h-[35px] after:rounded-[50px] after:bg-[#ffffff15] after:backdrop-blur-[3px] after:bg-gradient-to-br after:from-[rgba(28,175,131,0.5)] after:to-[rgba(28,175,131,0)]\n          hover:before:translate-x-[5%] hover:before:translate-y-[20%] hover:before:w-[110%] hover:before:h-[110%] hover:before:bg-[#1caf83]\n          hover:after:translate-x-0 hover:after:translate-y-0 hover:after:w-full hover:after:h-full hover:after:rounded-[50px] hover:after:backdrop-blur-[6px] hover:after:bg-gradient-to-br hover:after:from-[rgba(28,175,131,0.8)] hover:after:to-[rgba(28,175,131,0)]\n          active:after:transition-none active:after:translate-y-[5%]\" >
          <Link className="text-[#1caf83] font-rubik hover:text-white" href="https://www.aliensontheave.com/">
            <a role="button">Explore Site</a>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default ViewDesign;
import Link from "next/link";
import React from "react";

function PortfolioCoinzoomHero() {
  const heroData = {
    title: "The Complete Bitcoin & Crypto Experience",
    text: "Buy, sell, and trade over 40 cryptocurrencies including Bitcoin, Ether, and Litecoin on a regulated, secure exchange with some of the lowest fees in the industry.",
    btnText: "Explore site",
    btnHref: "/",
    heroImage: "images/Portfolio Details Coinzoom/Group 3246 1.svg",
    logo: "images/Portfolio Details Coinzoom/image 339.svg",
  };
  return (
    <div className="py-[100px] px-5 bg-[#222429]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src={heroData.logo} alt="" className="mb-5" />
            <h1 className="font-teko font-normal text-[32px] md:text-[64px] leading-[40px] md:leading-[63px] text-white mb-5">{heroData.title}</h1>
            <p className="font-rubik font-normal text-base leading-7 text-[#e9e9ea] mb-5">{heroData.text}</p>
            <button
              className="w-[100px] h-[30px] text-base bg-transparent border-none relative text-[#f0f0f0] cursor-pointer z-[1] py-2.5 px-5 flex items-center justify-center whitespace-nowrap select-none touch-manipulation
                before:content-[''] before:absolute before:bottom-0 before:right-0 before:z-[-99999] before:transition-all before:duration-[0.4s] before:translate-x-0 before:translate-y-0 before:w-full before:h-full before:bg-transparent before:border before:border-[#1caf83] before:rounded-[50px]
                after:content-[''] after:absolute after:bottom-0 after:right-0 after:z-[-99999] after:transition-all after:duration-[0.4s] after:translate-x-[10px] after:translate-y-[10px] after:w-[35px] after:h-[35px] after:rounded-[50px] after:bg-[#ffffff15] after:backdrop-blur-[3px] after:bg-gradient-to-br after:from-[rgba(28,175,131,0.5)] after:to-[rgba(28,175,131,0)]
                hover:before:translate-x-[5%] hover:before:translate-y-[20%] hover:before:w-[110%] hover:before:h-[110%] hover:before:bg-[#1caf83]
                hover:after:translate-x-0 hover:after:translate-y-0 hover:after:w-full hover:after:h-full hover:after:rounded-[50px] hover:after:backdrop-blur-[6px] hover:after:bg-gradient-to-br hover:after:from-[rgba(28,175,131,0.8)] hover:after:to-[rgba(28,175,131,0)]
                active:after:transition-none active:after:translate-y-[5%]"
              href="https://www.coinzoom.com/">
              <Link className="text-[#1caf83] font-rubik hover:text-white" href="https://www.coinzoom.com/">
                <a role="button">{heroData.btnText}</a>
              </Link>
            </button>
          </div>
          <div>
            <img src={heroData.heroImage} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCoinzoomHero;

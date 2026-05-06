import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImg from "../../../public/images/LandingPage/HeroSec/HeroSec.svg";

const HeroSec = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative">
        <div className="green-abstract-right"></div>
        <div className="green-abstract-left"></div>

        <div className="my-2.5 lg:my-[150px] max-w-[900px]">
          <h1 className="font-teko font-normal text-[32px] md:text-[64px] leading-[40px] md:leading-[64px]">
            A 360 Degree Solution for your NFT Business.
          </h1>
          <h5 className="my-5 mt-5 mb-2.5 max-w-[500px] font-rubik font-normal text-lg leading-7">
            ApexDv is a software design and engineering partner that helps you
            build successful tech products.
          </h5>
          <div className="flex flex-row gap-5 w-[300px] sm:w-full">
            <button className="btn-hero-primary">
              <a href="#contactUs">Get Started</a>
            </button>
            <button className="btn-hero-secondary">
              <Link href="/portfolio">
                <a role="button">View Our Portfolio</a>
              </Link>
            </button>
          </div>
          <p className="text-[#BDBDBF] mt-[100px]">Trusted By</p>
          <div className="flex flex-row overflow-hidden sm:overflow-visible">
            <img
              className="my-6 mx-5 opacity-50"
              alt="coinzoom"
              src="/images/LandingPage/HeroSecLogo/coinzoom.svg"
            />
            <img
              className="my-6 mx-5 opacity-50"
              alt="luna"
              src="/images/LandingPage/HeroSecLogo/luna.svg"
            />
            <img
              className="my-6 mx-5 opacity-50"
              alt="blocknative"
              src="/images/LandingPage/HeroSecLogo/blocknative.svg"
            />
            <img
              className="my-6 mx-5 opacity-50"
              alt="enjin"
              src="/images/LandingPage/HeroSecLogo/enjin.svg"
            />
          </div>
        </div>

        <div className="hidden lg:block my-2.5 lg:my-[150px]">
          <Image src={HeroImg} alt="Hero Section Image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSec;

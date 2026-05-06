import Link from "next/link";
import React from "react";
import styles from "../../../../styles/Home.module.css";

const HeroSec = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-around"
      style={{ backgroundColor: "#0A1D0F" }}>
      <div className="hidden lg:block">
        <div className={styles.quote}>Get a free quote</div>
      </div>
      <div className="mx-1.5 my-2.5 lg:mx-37.5 lg:my-50.5">
        <img className="h-14 w-50.75" alt="Aota" src={`/images/Portfolio Details AOTA/Aota.svg`} />
        <h2 className="font-teko font-normal text-white text-[32px] md:text-[64px] leading-[40px] md:leading-[64px]">
          We're Aliens on the eve
        </h2>
        <h3 className="text-white mt-5 text-xl">
          We're Brainging creative co-working to the Metaverse.
        </h3>
        <button className={styles.button2}>
          <Link className="" href="https://www.aliensontheave.com/">
            <a role="button">Explore Site</a>
          </Link>
        </button>
      </div>
      <div className="h-full">
        <img
          className="h-full lg:h-[736px] mr-0 lg:mr-25"
          alt="Hero"
          src={`/images/Portfolio Details AOTA/HeroImg.svg`}
        />
      </div>
    </div>
  );
};

export default HeroSec;

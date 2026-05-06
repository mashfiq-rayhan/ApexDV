import Link from "next/link";
import React from "react";
import styles from "../../../../styles/Home.module.css";

const HeroSec = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-evenly"
      style={{ backgroundColor: "#904F3D" }}>
      <div className="hidden lg:block">
        <div className={styles.quote}>Get a free quote</div>
      </div>
      <div className="h-full">
        <img
          className="h-full m-0 lg:my-42"
          alt="Hero"
          src={`/images/Portfolio Details impostors/HeroImg.svg`}
        />
      </div>
      <div className="mx-1.5 my-5 lg:my-50.5 lg:mr-50 lg:ml-0">
        <img
          className="h-14 w-50.75"
          alt="Aota"
          src={`/images/Portfolio Details impostors/impostors.svg`}
        />
        <h2 className="font-teko font-normal text-white">What is IMPOSTORS</h2>
        <p className="my-2.5 text-white">We're Brainging creative co-working to the Metaverse.</p>
        <p className="my-2.5 text-white">We're Brainging creative co-working to the Metaverse.</p>
        <p className="my-2.5 text-white">We're Brainging creative co-working to the Metaverse.</p>
        <button className={styles.button2}>
          <Link className="" href="https://impostors.gg/">
            <a role="button">Explore Site</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSec;

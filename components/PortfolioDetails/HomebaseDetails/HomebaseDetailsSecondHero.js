import Link from "next/link";
import React from "react";
import styles from "../../../styles/Home.module.css";

const HomebaseDetailsSecondHero = () => {
  const heroData = {
    title: "Bring Real Estate On-Chain and Fractionalize Ownership via NFT's",
    text: "Imagine owning an NFT that represents a fractional share of a home which airdrops you rent each month. This is the future of real estate ownership.",
    btnText: "Explore site",
    btnHref: "/",
    heroImage: "images/Portfolio Details homebase/image 507.svg",
  };
  return (
    <div className={styles.homebaseDetailsHero}>
      <div className={styles.green_abstract_right}></div>
      <div className={styles.green_abstract_left}></div>
      <div className="container p-5">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${styles.homebaseDetailsHeroContainer}`}>
          <div className={styles.homebaseDetailsHeroText}>
            <h1>{heroData.title}</h1>
            <p>{heroData.text}</p>
            <button className={styles.button86} href="https://homebasedao.io/">
              <Link className="" href="https://homebasedao.io/">
                <a role="button">{heroData.btnText}</a>
              </Link>
            </button>
          </div>
          <div className={styles.homebaseDetailsSecondHeroImg}>
            <img src={heroData.heroImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomebaseDetailsSecondHero;

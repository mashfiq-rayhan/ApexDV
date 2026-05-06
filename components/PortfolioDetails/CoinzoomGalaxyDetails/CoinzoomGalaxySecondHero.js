import Link from "next/link";
import React from "react";
import styles from "../../../styles/Home.module.css";

const CoinzoomGalaxySecondHero = () => {
  const heroData = {
    title: "Explore rewards based on your credentials on ",
    title2: "multiple blockchains",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci porttitor amet, dui convallis purus tincidunt bibendum.",
    btnText: "Explore site",
    btnHref: "/",
    heroImage: "images/Portfolio Details Coinzoom Project Galaxy/Group 3305.svg",
  };
  return (
    <div className={styles.coinzoomGalaxySecondHero}>
      <div className="container">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 ${styles.coinzoomGalaxySecondHeroContainer}`}>
          <div className={styles.coinzoomGalaxyImg}>
            <img src={heroData.heroImage} alt="" />
          </div>
          <div className={styles.coinzoomGalaxySecondHeroText}>
            <h1>
              {heroData.title} <span>{heroData.title2}</span>{" "}
            </h1>
            <p>{heroData.text}</p>
            <button className={styles.button86} href="https://galaxy.eco/">
              <Link className="" href="https://galaxy.eco/">
                <a role="button">{heroData.btnText}</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinzoomGalaxySecondHero;

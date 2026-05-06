import Link from "next/link";
import React from "react";
import styles from "../../../styles/Home.module.css";

const EnjinDetailsHero = () => {
  const heroData = {
    title1: "NFTs you can use to ",
    subtitle: "grow your business",
    text1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque orci sed ac sit ut fermentum dictum quis.",
    btnText: "Explore site",
    btnHref: "/",
    heroImage: "/images/Portfolio Details Enjin/Group 3246 1-3 1.svg",
    logo: "/images/Portfolio Details Enjin/image 483.svg",
  };

  return (
    <div className={styles.EnjinDetailsHero}>
      <div className={styles.TopShadow}></div>
      <div className={styles.BottomShadow}></div>
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={styles.EnjinDetailsText}>
            <img src={heroData.logo} alt="" />
            <h1>
              {heroData.title1} <span>{heroData.subtitle}</span>
            </h1>
            <p>{heroData.text1}</p>
            <button className={styles.button} href="/contact">
              <Link className="" href="https://enjin.io/">
                <a role="button">{heroData.btnText}</a>
              </Link>
            </button>
          </div>
          <div className={styles.EnjinDetailsImage}>
            <img src={heroData.heroImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnjinDetailsHero;

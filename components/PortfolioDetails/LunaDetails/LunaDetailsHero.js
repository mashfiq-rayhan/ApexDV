import Link from "next/link";
import React from "react";
import styles from "../../../styles/Home.module.css";

const LunaDetailsHero = () => {
  const heroData = {
    title: "Transform the idea of digital ownership",
    text: "We bring the biggest brands in the world into the Metaverse with laser focus on utility, community, and culture definition.",
    btnText: "Explore site",
    btnHref: "/",
    heroImage: "images/Portfolio Details Luna/Group 3246 1-3 1.svg",
    logo: "images/Portfolio Details Luna/Group 3277.svg",
  };
  return (
    <div className={styles.lunaDetailsHero}>
      <div className={styles.green_abstract_right}></div>
      <div className={styles.green_abstract_left}></div>

      <div className="container">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${styles.lunaDetailsHeroContainer}`}>
          <div className={styles.coinzoomGalaxyImg}>
            <img src={heroData.heroImage} alt="" />
          </div>
          <div className={styles.lunaDetailsHeroText}>
            <img src={heroData.logo} alt="" />
            <h1>{heroData.title}</h1>
            <p>{heroData.text}</p>
            <button className={styles.button86} href="https://lunamarket.io/">
              <Link className="" href="https://lunamarket.io/">
                <a role="button">{heroData.btnText}</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LunaDetailsHero;

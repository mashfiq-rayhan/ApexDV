import Link from "next/link";
import React from "react";
import styles from "../../../styles/Home.module.css";

const EnjinWebsite = () => {
  const heroData = {
    title1: "Enjin website Design",
    text1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque orci sed ac sit ut fermentum dictum quis.",
    btnText: "Explore site",
    btnHref: "/",
    heroImage: "/images/Portfolio Details Enjin/Group 3238.svg",
  };
  return (
    <div className={styles.EnjinDetailsHero}>
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={styles.EnjinDetailsImage}>
            <img src={heroData.heroImage} alt="" />
          </div>
          <div className={styles.EnjinDetailsText} id={styles.EnjinWebsite}>
            <h1>{heroData.title1}</h1>
            <p>{heroData.text1}</p>
            <button className={styles.button} href="https://enjin.io/">
              <Link className="" href="https://enjin.io/">
                <a role="button">{heroData.btnText}</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnjinWebsite;

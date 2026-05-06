import Link from "next/link";
import React from "react";

const HomebaseDetailsHero = () => {
  const heroData = {
    title: "Real Estate Reimagined.",
    text: "Homebase is redefining how communities buy, sell, and own real estate.",
    btnText: "Explore site",
    btnHref: "/",
    heroImage: "images/Portfolio Details homebase/Group 3301 22.svg",
    logo: "images/Portfolio Details homebase/image 505.svg",
  };
  return (
    <div className={styles.homebaseDetailsHero}>
      <div className={styles.green_abstract_right}></div>
      <div className={styles.green_abstract_left}></div>
      <div className="container p-5">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${styles.homebaseDetailsHeroContainer}`}>
          <div className={styles.homebaseDetailsHeroImg}>
            <img src={heroData.heroImage} alt="" />
          </div>
          <div className={styles.homebaseDetailsHeroText}>
            <img src={heroData.logo} alt="" />
            <h1>{heroData.title}</h1>
            <p>{heroData.text}</p>
            <button className={styles.button86} href="https://homebasedao.io/">
              <Link className="" href="https://homebasedao.io/">
                <a role="button">{heroData.btnText}</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomebaseDetailsHero;

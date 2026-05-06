import Link from "next/link";
import React from "react";

const PortfolioHorizenDetails = () => {
  const horizenData = {
    title: "Building In Web3? Partner with the Experts",
    text: "Go from concept to launch on any platform with expert guidance at every stage. Reduce complexity and get to market quickly.",
    btnText: "Explore site",
    btnHref: "/",
    heroImage: "/images/Portfolio Details Horizen/Group 3304 1.svg",
    logo: "/images/Portfolio Details Horizen/image 520.svg",
  };

  return (
    <div className={styles.HorizenDetailsHero}>
      <div className={styles.TopShadow}></div>
      <div className={styles.BottomShadow}></div>
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={styles.HorizenDetailsImage}>
            <img src={horizenData.heroImage} alt="" />
          </div>

          <div className={styles.HorizenDetailsText}>
            <img src={horizenData.logo} alt="" />
            <h1>{horizenData.title}</h1>
            <p>{horizenData.text}</p>
            <button className={styles.button} href="https://horizenlabs.io/">
              <Link className="" href="https://horizenlabs.io/">
                <a role="button">{horizenData.btnText}</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHorizenDetails;

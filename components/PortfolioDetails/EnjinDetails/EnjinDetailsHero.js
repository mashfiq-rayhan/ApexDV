import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./EnjinDetailsHero.module.css";

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
        <Grid container>
          <Grid item xs={12} md={6} className={styles.EnjinDetailsText}>
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
          </Grid>
          <Grid item xs={12} md={6} className={styles.EnjinDetailsImage}>
            <img src={heroData.heroImage} alt="" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default EnjinDetailsHero;

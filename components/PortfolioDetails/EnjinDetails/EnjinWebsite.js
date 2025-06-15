import { Grid } from "@mui/material";
import Link from 'next/link';
import React from "react";
import styles from "./EnjinDetailsHero.module.css";

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
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} className={styles.EnjinDetailsImage}>
            <img src={heroData.heroImage} alt="" />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={styles.EnjinDetailsText}
            id={styles.EnjinWebsite}
          >
            <h1>{heroData.title1}</h1>
            <p>{heroData.text1}</p>
            <button className={styles.button} href="https://enjin.io/">
                <Link className="" href="https://enjin.io/">
                <a role="button">{heroData.btnText}</a>
                </Link>
                </button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default EnjinWebsite;
